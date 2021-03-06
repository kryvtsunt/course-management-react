import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, SELECT_WIDGET_TYPE, MOVE_UP_WIDGET, MOVE_DOWN_WIDGET} from "../constants/index";
import * as actions from '../actions/index'

const Heading = ({widget, preview, headingSizeChanged, textChanged}) => {
    let selectElement;
    let inputElement;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <input
                    className="form-control"
                    onChange={() => textChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Put your text here"
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
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                {widget.size == 1 && <h1>{widget.text}</h1>}
                {widget.size == 2 && <h2>{widget.text}</h2>}
                {widget.size == 3 && <h3>{widget.text}</h3>}
            </div>
            <br/>
        </div>
    )
}

const Paragraph = ({widget, preview, textChanged}) => {
    let inputElement;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <textarea
                    className="form-control"
                    onChange={() => textChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Put your text here"
                    ref={node => inputElement = node}/>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                {widget.text.replace(/(.{80})/g, "$1\n")}
            </div>
            <br/>
        </div>
    )
}

const List = ({widget, preview, textChanged, listTypeChanged}) => {
    let inputElement;
    let selectElement;
    let i = 0;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <textarea
                    className="form-control"
                    onChange={() => textChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Put your text here"
                    ref={node => inputElement = node}/>
                <select className="custom-select"
                        onChange={() => listTypeChanged(widget.id, selectElement.value)}
                        value={widget.listType}
                        ref={node => selectElement = node}>
                    <option value="Unordered"> Unordered list</option>
                    <option value="Ordered"> Ordered list</option>
                </select>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                {widget.listType == 'Unordered' &&
                <ul>{
                    widget.text.split('\n').map(line => (
                        <li key={++i}>{line.replace(/(.{80})/g, "$1\n")}</li>))
                }</ul>}
                {widget.listType == 'Ordered' &&
                <ol>{
                    widget.text.split('\n').map(line => (
                        <li key={++i}>{line.replace(/(.{80})/g, "$1\n")}</li>))
                }</ol>}

            </div>
            <br/>
        </div>
    )
}


const Image = ({widget, preview, imageChanged, widthChanged}) => {
    let inputElement;
    let inputElement1;
    let inputElement2;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <input
                    className="form-control"
                    onChange={() => imageChanged(widget.id, inputElement.value)}
                    value={widget.src}
                    placeholder="Image URL"
                    ref={node => inputElement = node}/>
                <div className="input-group">
                    <input
                        className="form-control"
                        onChange={() => widthChanged(widget.id, inputElement1.value)}
                        value={widget.width}
                        placeholder="Image width"
                        ref={node => inputElement1 = node}/>
                    <button className='btn btn-outline-secondary fa fa-plus'
                            onClick={e => widthChanged(widget.id, ++inputElement1.value)}></button>
                    <button className='btn btn-outline-secondary fa fa-minus'
                            onClick={e => widthChanged(widget.id, --inputElement1.value)}></button>
                </div>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                <img className="img-fluid rounded border border-white" src={widget.src} width={widget.width}/>
            </div>
            <br/>
        </div>
    )
}


const Link = ({widget, preview, textChanged, linkChanged}) => {
    let inputElement;
    let inputElement1;
    return (
        <div className="">
            <div hidden={preview}>

                <textarea
                    className="form-control"
                    onChange={() => textChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Link text"
                    ref={node => inputElement = node}/>
                <textarea
                    className="form-control"
                    onChange={() => linkChanged(widget.id, inputElement1.value)}
                    value={widget.href}
                    placeholder="URL"
                    ref={node => inputElement1 = node}/>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                <a href={widget.href}>{widget.text}</a>
            </div>
            <br/>
        </div>
    )
}

const Exam = ({widget, preview, textChanged}) => {
    let inputElement;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <input
                    className="form-control"
                    onChange={() => textChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Put your text here"
                    ref={node => inputElement = node}/>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                <h3>{widget.text}</h3>
            </div>
            <br/>
        </div>
    )
}

const Assignment = ({widget, preview, textChanged}) => {
    let inputElement;
    return (
        <div className="">
            <div hidden={preview}>
                {/*<h2> Heading {widget.size}</h2>*/}
                <input
                    className="form-control"
                    onChange={() => textChanged(widget.id, inputElement.value)}
                    value={widget.text}
                    placeholder="Put your text here"
                    ref={node => inputElement = node}/>
                <br/>
                <br/>
                <h3>Preview</h3>
            </div>
            <div className="container-fluid text-center">
                <h3>{widget.text}</h3>
            </div>
            <br/>
        </div>
    )
}


const Widget = ({widget, preview, dispatch}) => {
    let selectElement;
    return (
        <li className="list-group-item" style={{backgroundColor: '#F0F0F0'}}>
            <h6>{widget.name}</h6>
            <div className="input-group">
                <select hidden={preview} className="custom-select" value={widget.widgetType}
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
                    <option> Link</option>
                    <option> Exam</option>
                    <option> Assignment</option>

                </select>
                <button className="btn btn-danger fa fa-times"
                        onClick={e => (dispatch({type: DELETE_WIDGET, id: widget.id, widgetOrder: widget.widgetOrder})
                        )}>
                </button>
                <button hidden={!preview} className="btn btn-warning fa fa-edit">
                </button>
                <button hidden={preview} className='btn btn-outline-info fa fa-arrow-up'
                        onClick={e => (dispatch({type: MOVE_UP_WIDGET, widgetOrder: widget.widgetOrder})
                        )}></button>
                <button hidden={preview} className='btn btn-outline-info fa fa-arrow-down'
                        onClick={e => (dispatch({type: MOVE_DOWN_WIDGET, widgetOrder: widget.widgetOrder})
                        )}></button>
            </div>
            <br/>
            <br/>
            <div>
                {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
                {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
                {widget.widgetType === 'Exam' && <ExamContainer widget={widget}/>}
                {widget.widgetType === 'Assignment' && <AssignmentContainer widget={widget}/>}

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
    textChanged: (widgetId, newText) =>
        actions.textChanged(dispatch, widgetId, newText),
    listTypeChanged: (widgetId, newType) =>
        actions.listTypeChanged(dispatch, widgetId, newType),
    imageChanged: (widgetId, newImage) =>
        actions.imageChanged(dispatch, widgetId, newImage),
    widthChanged: (widgetId, newWidth) =>
        actions.widthChanged(dispatch, widgetId, newWidth),
    linkChanged: (widgetId, newLink) =>
        actions.linkChanged(dispatch, widgetId, newLink)
})

export const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)
export const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)
export const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)
export const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)
export const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)
export const ExamContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Exam)
export const AssignmentContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Assignment)
export const WidgetContainer = connect(stateToPropsMapper)(Widget)

