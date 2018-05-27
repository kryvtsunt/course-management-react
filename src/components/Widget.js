import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, SELECT_WIDGET_TYPE} from "../constants/index";
import * as actions from '../actions/index'

const Heading = ({widget, headingSizeChanged, headingTextChanged}) => {
    let selectElement;
    let inputElement;
    return (
        <div>
            <h2> Heading {widget.size}</h2>
            <input
                onChange={()=> headingTextChanged(widget.id, inputElement.value)}
                value={widget.text}
                ref={node => inputElement = node}/>
            <select
                onChange={() => headingSizeChanged(widget.id, selectElement.value)}
                value={widget.size}
                ref={node => selectElement = node}>
                <option value="1"> Heading 1 </option>
                <option value="2">  Heading 2 </option>
                <option value="3">  Heading 3 </option>
            </select>
            <h3>Preview</h3>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
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
        <li>
            {/*{widget.id} {widget.text} {widget.widgetType}*/}
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
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText)
})

export const HeadingContainer = connect(null, dispatchToPropsMapper)(Heading)
export const WidgetContainer = connect()(Widget)
