import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findAllWidgets, addWidget, save} from "../../actions/index";
import {WidgetContainer}  from "../../components/Widget";


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

export const Widgets = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList);

