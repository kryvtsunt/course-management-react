import React, {Component} from 'react';


import * as constants from '../constants/index.js'



export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    //let autoIncrement = state.widgets.length;
    switch (action.type) {
        case constants.ADD_WIDGET:
            return {
                widgets: [...state.widgets,
                    {
                        id: state.widgets.length,
                        widgetOrder: state.widgets.length,
                        text: '',
                        widgetType: 'Heading',
                        listType: 'Unordered',
                        src: '',
                        href: '',
                        width: '200',
                        height: '200',
                        size: '2'
                    }
                ],
                preview: state.preview
            }
        case constants.DELETE_WIDGET:
            //autoIncrement--;
            return {
                widgets: state.widgets.filter(widget => (widget.id !== action.id))
                    .map(widget => {
            if (widget.widgetOrder > action.widgetOrder) {
                widget.widgetOrder = widget.widgetOrder - 1;
            }
            return Object.assign({}, widget)
        }), preview: state.preview
            }
        case constants.FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets,
                preview: state.preview
            }

        case constants.FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets,
                 preview: state.preview
            }

        case constants.MOVE_UP_WIDGET:
            if (action.widgetOrder !== 0) {
                state.widgets[action.widgetOrder].widgetOrder = action.widgetOrder - 1;
                state.widgets[action.widgetOrder - 1].widgetOrder = action.widgetOrder;
                console.log(state.widgets);
            }
            return {
                widgets: Object.values(state.widgets),
                preview: state.preview
            }

        case constants.MOVE_DOWN_WIDGET:
            if (action.widgetOrder !== (state.widgets.length - 1)) {
                state.widgets[action.widgetOrder].widgetOrder = action.widgetOrder + 1;
                state.widgets[action.widgetOrder + 1].widgetOrder = action.widgetOrder;
                console.log(state.widgets);
            }
            return {
                widgets: Object.values(state.widgets),
                preview: state.preview
            }

        case constants.SAVE_FOR_TOPIC:
            fetch('http://localhost:8080/api/topic/TID/widget'.replace('TID', action.topicId),
                {
                    method: 'post',
                    body: JSON.stringify(state.widgets),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            return state

        case constants.SAVE:
            fetch('http://localhost:8080/api/widget',
                {
                    method: 'post',
                    body: JSON.stringify(state.widgets),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            return state


        // Both ways work:

        // (1)
        // case constants.SELECT_WIDGET_TYPE:
        //     let newState = {
        //         widgets: state.widgets.filter(widget =>
        //         {
        //             if (widget.id === action.id){
        //                 widget.widgetType = action.widgetType
        //             }
        //             return true;
        //         })
        //     }
        //     return JSON.parse(JSON.stringify(newState));

        // (2)
        case constants.SELECT_WIDGET_TYPE:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }
        case constants.IMAGE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.src = action.src;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }
        case constants.LINK_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.href = action.href;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.WIDTH_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.width = action.width;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.HEIGHT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.height = action.height;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            }


        default:
            return state
    }
};

