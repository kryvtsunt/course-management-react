import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, SELECT_WIDGET_TYPE} from "../constants/index";
import * as actions from '../actions/index'

const Heading = ({widget, preview, headingSizeChanged, headingTextChanged}) => {
    let selectElement;
    let inputElement;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <input
                    className="form-control"
                    onChange={() => headingTextChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    ref={node => inputElement = node}/>
                <select className="custom-select"
                    onChange={() => headingSizeChanged(widget.id, selectElement.value)}
                    value={widget.size}
                    ref={node => selectElement = node}>
                    <option value="1"> Heading 1</option>
                    <option value="2"> Heading 2</option>
                    <option value="3"> Heading 3</option>
                </select>
                <br/>
                {/*<h3>Preview</h3>*/}
            </div>
            <div className="container-fluid text-center">
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
            </div>
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

const Link = () => (
    <h2> Link </h2>
)


const Widget = ({widget, preview, dispatch}) => {
    let selectElement;
    return (
        <li className="list-group-item">
            <div hidden={preview} className="input-group">
                {widget.id} {widget.text} {widget.widgetType}
                <select className="custom-select" value={widget.widgetType}
                        onChange={() => dispatch({
                            type: SELECT_WIDGET_TYPE,
                            id: widget.id,
                            widgetType: selectElement.value
                        })}
                        ref={node => selectElement = node}>
                    <option> Heading</option>
                    <option> Paragraph</option>
                    <option> List</option>
                    <option> Image</option>
                    <option> Link </option>

                </select>
                <button className="btn btn-sm btn-danger" onClick={e => (dispatch({type: DELETE_WIDGET, id: widget.id})
                )}> Delete widget
                </button>
            </div>
            <div>
                {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
                {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}

            </div>

        </li>
    )
}


const stateToPropsMapper = state => ({
    preview: state.preview
})

const dispatchToPropsMapper = dispatch => ({
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText)
})

export const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)
export const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)
export const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)
export const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)
export const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)
export const WidgetContainer = connect(stateToPropsMapper)(Widget)
