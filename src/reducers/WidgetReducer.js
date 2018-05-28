import React, {Component} from 'react';


import * as constants from '../constants/index.js'


let idAutoIncrement = 3;
export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let newState;
    switch (action.type) {
        case constants.ADD_WIDGET:
            return {
                widgets: [...state.widgets,
                    {
                        id: idAutoIncrement++,
                        text: 'New Widget',
                        widgetType: 'Heading',
                        size: '2',
                    }
                ]
            };
        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (widget.id !== action.id))
            }
        case constants.FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }
        case constants.SAVE:
            fetch('http://localhost:8080/api/widget/save',
                {
                    method: 'post',
                    body: JSON.stringify(state.widgets),
                    headers: {
                        'content-type': 'application/json'
                    }
                })

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
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size;
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget)
                })
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

