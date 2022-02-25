import ReferencesActionsTypes from "./reference.types";

export const fetchReferencesStart = () => ({
    type : ReferencesActionsTypes.FETCH_REFERENCES_START,
});


export const fetchReferencesSuccess = references => ({
    type : ReferencesActionsTypes.FETCH_REFERENCES_SUCCESS,
    payload : references,
});

export const fetchReferencesFailure = errorMessage => ({
    type : ReferencesActionsTypes.FETCH_REFERENCES_FAILURE,
    payload : errorMessage,
});
