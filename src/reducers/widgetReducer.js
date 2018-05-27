import React, {Component} from 'react';


import {ADD_WIDGET, SAVE, DELETE_WIDGET, FIND_ALL_WIDGETS, SELECT_WIDGET_TYPE} from '../constants/index.js'


let idAutoIncrement = 3;
export const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return {
                widgets: [...state.widgets, {id: idAutoIncrement++, text: 'New Widget', widgetType: 'Paragraph'}]
            };
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (widget.id !== action.id))
            }
        case FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }
        case SAVE:
            fetch('http://localhost:8080/api/widget/save',
                {
                    method: 'post',
                    body: JSON.stringify(state.widgets),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
        case SELECT_WIDGET_TYPE:
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

        default:
            return state
    }
};

