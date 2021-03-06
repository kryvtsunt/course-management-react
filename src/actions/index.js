import * as constants from '../constants/index.js'

const WIDGET_URL =
    'http://localhost:8080/api/topic/TID/widget';
    // 'https://tk-course-management.herokuapp.com/api/topic/TID/widget';

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}


export const findAllWidgetsForTopic = (dispatch, topicId) => {
    fetch(WIDGET_URL.replace('TID', topicId))
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))
}

export const setTopicId = (dispatch, topicId) => {
    dispatch({
        type: constants.SET_TOPIC_ID,
        topicId: topicId
    })
}

export const addWidget = (dispatch, name) => (
    dispatch({
        type: constants.ADD_WIDGET,
        name: name
    })
)

export const save = dispatch => (
    dispatch({type: constants.SAVE})
)

export const saveForTopic = (dispatch) => (
    dispatch({
        type: constants.SAVE_FOR_TOPIC,
    })
)

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize
    })
)

export const imageChanged = (dispatch, widgetId, newImage) => (
    dispatch({
        type: constants.IMAGE_CHANGED,
        id: widgetId,
        src: newImage
    })
)

export const widthChanged = (dispatch, widgetId, newWidth) => (
    dispatch({
        type: constants.WIDTH_CHANGED,
        id: widgetId,
        width: newWidth
    })
)

export const linkChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: constants.LINK_CHANGED,
        id: widgetId,
        href: newLink
    })
)

export const heightChanged = (dispatch, widgetId, newHeight) => (
    dispatch({
        type: constants.HEIGHT_CHANGED,
        id: widgetId,
        height: newHeight
    })
)

export const listTypeChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newType
    })
)

export const textChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
)
