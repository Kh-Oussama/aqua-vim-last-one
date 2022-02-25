import MarksActionsTypes from "./marks.types";

export const fetchMarksStart = () => ({
    type : MarksActionsTypes.FETCH_MARKS_START,
});
export const clearVariables = () => ({
    type : MarksActionsTypes.CLEAR_VAR_EV,
});

export const fetchMarksSuccess = mark => ({
    type : MarksActionsTypes.FETCH_MARKS_SUCCESS,
    payload : mark,
});

export const fetchMarksFailure = errorMessage => ({
    type : MarksActionsTypes.FETCH_MARKS_FAILURE,
    payload : errorMessage,
});

export const addMarkStart = markInformation =>  ({
    type : MarksActionsTypes.ADD_MARK_START,
    payload : markInformation
});

export const addMarkSuccess = () =>  ({
    type : MarksActionsTypes.ADD_MARK_SUCCESS,
});

export const addMarkFailure = errorMessage => ({
    type : MarksActionsTypes.ADD_MARK_FAILURE,
    payload : errorMessage,
});

export const deleteMarkStart = mark =>  ({
    type : MarksActionsTypes.DELETE_MARK_START,
    payload : mark,
});

export const deleteMarkSuccess = mark =>  ({
    type : MarksActionsTypes.DELETE_MARK_SUCCESS,
    payload : mark,
});

export const deleteMarkFailure = mark => ({
    type : MarksActionsTypes.DELETE_MARK_FAILURE,
    payload : mark,
});

export const getMarkStart = mark =>  ({
    type : MarksActionsTypes.GET_MARK_START,
    payload : mark,
});

export const getMarkSuccess = mark =>  ({
    type : MarksActionsTypes.GET_MARK_SUCCESS,
    payload : mark,
});

export const getMarkFailure = errorMessage => ({
    type : MarksActionsTypes.GET_MARK_FAILURE,
    payload : errorMessage,
});

export const updateMarkStart = mark =>  ({
    type : MarksActionsTypes.UPDATE_MARK_START,
    payload : mark,
});

export const updateMarkSuccess = () =>  ({
    type : MarksActionsTypes.UPDATE_MARK_SUCCESS,
});

export const updateMarkFailure = errorMessage => ({
    type : MarksActionsTypes.UPDATE_MARK_FAILURE,
    payload : errorMessage,
});
