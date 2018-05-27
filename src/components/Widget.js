import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, SELECT_WIDGET_TYPE} from "../constants/index";
import {headingSizeChanged} from "../actions/index";
import * as actions from '../actions/index'

const Heading = ({widget, headingSizeChanged}) => {
    let selectElement;
    return (
        <div>
            <h2> Heading </h2>
            <select
                onChange={() => headingSizeChanged(widget.id, selectElement.value)}
                ref={node => selectElement = node}>
                <option> Heading 1</option>
                <option> Heading 2</option>
                <option> Heading 3</option>
            </select>
        </div>
    )
}

const Paragraph = () => (
    <div>
        <h2> Paragraph </h2>
        <textarea></textarea>
    </div>
)

const List = () => (
    <div>
        <h2> List </h2>
        <select>
            <option> Ordered</option>
            <option> Unordered</option>
        </select>
        <textarea></textarea>
    </div>
)

const Image = () => (
    <h2> Image </h2>
)


const Widget = ({widget, dispatch}) => {
    let selectElement;
    return (
        <li> {widget.id} {widget.text} {widget.widgetType}
            <select value={widget.widgetType}
                    onChange={() => dispatch({
                        type: SELECT_WIDGET_TYPE,
                        id: widget.id,
                        widgetType: selectElement.value
                    })}
                    ref={node => selectElement = node}>
                <option> Paragraph</option>
                <option> Heading</option>
                <option> List</option>
                <option> Image</option>

            </select>
            <button onClick={e => (dispatch({type: DELETE_WIDGET, id: widget.id})
            )}> Delete widget
            </button>
            <div>
                {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType === 'Paragraph' && <Paragraph/>}
                {widget.widgetType === 'Image' && <Image/>}
                {widget.widgetType === 'List' && <List/>}
            </div>

        </li>
    )
}


const dispatchToPropsMapper = dispatch => ({
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
})

export const HeadingContainer = connect(null, dispatchToPropsMapper())(Heading)
export const WidgetContainer = connect()(Widget)
