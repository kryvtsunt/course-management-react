import {ADD_WIDGET, SAVE, DELETE_WIDGET, FIND_ALL_WIDGETS} from '../constants/index.js'

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}


export const addWidget = dispatch => (
    dispatch({type: ADD_WIDGET})
)

export const save = dispatch => (
    dispatch({type: SAVE})
)
