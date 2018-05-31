import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../../actions";
import {WidgetContainer} from "../../components/Widget";


class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.props.setTopicId(this.props.topic);
        this.props.findAllWidgetsForTopic(this.props.topic);


    }


    componentWillReceiveProps(newProps) {

        if (this.props.topicId != newProps.topic) {
            this.props.setTopicId(newProps.topic);
            this.props.findAllWidgetsForTopic(newProps.topic);
        }

    }

    render() {
        let inputElement;
        return (
            <div className="container-fluid">
                {/*<h1> Widget List ({this.props.widgets.length}) </h1>*/}
                <br/>
                <div className="navbar ">
                    {/*<span className="input-group">*/}
                    <button className={(this.props.previewMode) ? "btn btn-warning container-fluid" : "btn btn-warning"}
                            onClick={this.props.preview}>
                        {(this.props.previewMode) ? "Edit" : "Preview"}
                    </button>
                    <button className="btn btn-success" hidden={this.props.previewMode}
                            onClick={() => this.props.saveForTopic()}>Save
                    </button>

                    {/*</span>*/}
                </div>
                <ul className="list-group">
                    {this.props.widgets
                        .sort((a, b) => {
                            return a.widgetOrder - b.widgetOrder
                        })
                        .map(widget => (
                            <WidgetContainer widget={widget} key={widget.id}/>))
                    }
                </ul>
                <input
                    className=" container-fluid form-control text-center"
                    hidden={this.props.previewMode}
                    placeholder="New Widget"
                    ref={node => inputElement = node}
                />
                <i className="container-fluid btn btn-primary fa fa-plus" hidden={this.props.previewMode}
                   onClick={() => this.props.addWidget(inputElement.value)}>
                    {/*Add widget*/}
                </i>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) =>
    ({
        topicId: state.topicId,
        widgets: state.widgets,
        previewMode: state.preview
    });

const dispatcherToPropsMapper = dispatch =>
    ({
        findAllWidgets: () => actions.findAllWidgets(dispatch),
        findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
        addWidget: (name) => actions.addWidget(dispatch, name),
        save: () => actions.save(dispatch),
        saveForTopic: () => actions.saveForTopic(dispatch),
        preview: () => actions.preview(dispatch),
        setTopicId: (topicId) => actions.setTopicId(dispatch, topicId)
    })

export const Widgets = connect(stateToPropertyMapper, dispatcherToPropsMapper)(WidgetList);

