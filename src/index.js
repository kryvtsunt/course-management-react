import React, {Component} from 'react';
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from './containers/parent/CourseManager'


import './Widget'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import {Provider} from 'react-redux'

import {ADD_WIDGET, SAVE, DELETE_WIDGET, FIND_ALL_WIDGETS} from './constants/index.js'


const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}


const addWidget = dispatch => (
    dispatch({type: ADD_WIDGET})
)

const save = dispatch => (
    dispatch({type: SAVE})
)

const Widget = ({widget, dispatch}) => (
    <li> {widget.text}
        <button onClick={e => (dispatch({type: DELETE_WIDGET, id: widget.id})
        )}> Delete widget
        </button>
    </li>
)


class WidgetList extends Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }

    render() {
        return (
            <div>
                <h1> Widget List ({this.props.widgets.length}) </h1>
                <button onClick={this.props.save}>Save</button>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget} key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}>
                    Add widget
                </button>
            </div>
        )
    }
}

//({widgets, dispatch}) => (


let idAutoIncrement = 3;
const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return {
                widgets: [...state.widgets, {id: idAutoIncrement++, text: 'New Widget'}]
            };
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (widget.id !== action.id))
            }
        case FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }
        case SAVE:
            fetch('http://localhost:8080/api/widget/save',
                {
                    method: 'post',
                    body: JSON.stringify(state.widgets),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
        default:
            return state
    }
};

const stateToPropertyMapper = (state) =>
    ({
        widgets: state.widgets
    });

const dispatcherToPropsMapper = dispatch =>
    ({
        findAllWidgets: () => findAllWidgets(dispatch),
        addWidget: () => addWidget(dispatch),
        save: () => save(dispatch)
    })


let store = createStore(widgetReducer);

const WidgetContainer = connect()(Widget)
const App = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList);

ReactDom.render(
    <div className="container-fluid">
        <CourseManager/>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);