import React, {Component} from 'react';


import * as constants from '../constants/index.js'


let idAutoIncrement = 3;
export const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case constants.ADD_WIDGET:
            return {
                widgets: [...state.widgets, {id: idAutoIncrement++, text: 'New Widget', widgetType: 'Paragraph'}]
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
        case constants.SELECT_WIDGET_TYPE:
            let newState = {
                widgets: state.widgets.filter(widget =>
                {
                    if (widget.id === action.id){
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState));
        case constants.HEADING_SIZE_CHANGED:


        default:
            return state
    }
};

