import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../../actions";
import {WidgetContainer} from "../../components/Widget";


class WidgetList extends Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }



    render() {
        return (
            <div className="container-fluid">
                <h1> Widget List ({this.props.widgets.length}) </h1>
                <button className="btn btn-success" hidden={this.props.previewMode} onClick={this.props.save}>Save
                </button>
                <button className="btn btn-warning" onClick={this.props.preview}>Preview</button>
                <ul className="list-group">
                    {this.props.widgets
                        .sort((a, b) => {
                            return a.widgetOrder - b.widgetOrder})
                        .map(widget => (
                            <WidgetContainer widget={widget} key={widget.id}/>))
                    }
                </ul>
                <button className="btn btn-primary" onClick={this.props.addWidget}>
                    Add widget
                </button>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) =>
    ({
        widgets: state.widgets,
        previewMode: state.preview
    });

const dispatcherToPropsMapper = dispatch =>
    ({
        findAllWidgets: () => actions.findAllWidgets(dispatch),
        addWidget: () => actions.addWidget(dispatch),
        save: () => actions.save(dispatch),
        preview: () => actions.preview(dispatch)
    })

export const Widgets = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList);

