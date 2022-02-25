import MarksActionsTypes from "./marks.types";

const INITIAL_STATE = {
    //marks list
    marks : [],
    isFetchingM : true,

    //add Mark
    addErrorMessage: null,
    addLoading : false,
    addStatus : false,

    //delete Mark
    markNotFoundError: false,
    deleteLoading : false,

    //get Mark
    getMarkError: null,
    currentMark : null,
    updateLoading : true,

    //update loading
    updateErrorMessage: null,
    updateStatus : false,


};

const marksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //marks list
        case MarksActionsTypes.FETCH_MARKS_START:
            return {
                ...state,
                isFetchingM: true,
                addStatus: false,
                addErrorMessage: null,
                markNotFoundError:false,
                updateStatus: false,
                updateLoading: true,
            };
        case MarksActionsTypes.FETCH_MARKS_SUCCESS:
            return {
                ...state,
                isFetchingM: false,
                marks: action.payload,
            };
        case MarksActionsTypes.FETCH_MARKS_FAILURE :
            return {
                ...state,
                isFetchingM: false,
                errorMessage: action.payload,
            };

        //Add marks
        case MarksActionsTypes.ADD_MARK_START :
            return {
                ...state,
                addLoading: true,
                addErrorMessage: null,
            }
        case MarksActionsTypes.ADD_MARK_SUCCESS :
            return {
                ...state,
                addStatus: true,
                addLoading: false,
                isFetchingM: true,
                addErrorMessage: null,
            }
        case MarksActionsTypes.ADD_MARK_FAILURE :
            return {
                ...state,
                addStatus: false,
                addErrorMessage: action.payload,
                addLoading: false,
            }

        //delete reference
        case MarksActionsTypes.DELETE_MARK_START :
            return {
                ...state,
                deleteLoading: true,
                markNotFoundError : false
                // errorMessage: null,
                // status: null,
            }
        case MarksActionsTypes.DELETE_MARK_SUCCESS :
            return {
                ...state,
                deleteLoading: false,
                markNotFoundError: false,
                marks: state.marks.filter(
                    mark => mark.id !== action.payload.id
                )
            }
        case MarksActionsTypes.DELETE_MARK_FAILURE :
            return {
                ...state,
                markNotFoundError: true,
                deleteLoading: false,
                marks: state.marks.filter(
                    mark => mark.id !== action.payload.id
                )
            }

        //get reference
        case MarksActionsTypes.GET_MARK_START :
            return {
                ...state,
                updateLoading: true,
                getMarkError:null,
            }
        case MarksActionsTypes.GET_MARK_SUCCESS :
            return {
                ...state,
                updateLoading: false,
                getMarkError: null,
                currentMark: action.payload,
            }
        case MarksActionsTypes.GET_MARK_FAILURE :
            return {
                ...state,
                updateLoading: false,
                getMarkError: action.payload,
                currentMark: null,
            }


        //update
        case MarksActionsTypes.UPDATE_MARK_START :
            return {
                ...state,
                updateLoading: true,
                updateErrorMessage : null,
                updateStatus : false,
            }
        case MarksActionsTypes.UPDATE_MARK_SUCCESS :
            return {
                ...state,
                updateStatus : true,
                updateErrorMessage: null,
                updateLoading: false,
                isFetchingM: true,
            }
        case MarksActionsTypes.UPDATE_MARK_FAILURE :
            return {
                ...state,
                updateStatus : false,
                updateErrorMessage: action.payload,
                updateLoading: false,
            }

            case MarksActionsTypes.CLEAR_VAR_M :
            return {
                ...state,
                loading: false,
            }
        default:
            return state;

    }
};

export default marksReducer;
