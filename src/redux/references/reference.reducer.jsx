import ReferencesActionsTypes from "./reference.types";

const INITIAL_STATE = {
    //References list
    references : [],
    isFetchingRef : true,

};

const referenceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //references list
        case ReferencesActionsTypes.FETCH_REFERENCES_START:
            return {
                ...state,
                isFetchingRef: true,
            };
        case ReferencesActionsTypes.FETCH_REFERENCES_SUCCESS:
            return {
                ...state,
                isFetchingRef: false,
                references: action.payload,
            };
        case ReferencesActionsTypes.FETCH_REFERENCES_FAILURE :
            return {
                ...state,
                isFetchingRef: false,
                // errorMessage: action.payload, aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            };
        default:
            return state;

    }
};

export default referenceReducer;
