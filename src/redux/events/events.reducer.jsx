import EventsActionsTypes from "./events.types";

const INITIAL_STATE = {
    //events list
    events : [],
    isFetchingEv : true,
};

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case EventsActionsTypes.FETCH_EVENTS_START:
            return {
                ...state,
                isFetchingEv: true,
                addStatus: false,
                addErrorMessage: null,
                eventNotFoundError:false,
                updateStatus: false,
                updateLoading: true,//verfierv update loading in the reference reducer
            };
        case EventsActionsTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                isFetchingEv: false,
                events: action.payload,
            };
        case EventsActionsTypes.FETCH_EVENTS_FAILURE :
            return {
                ...state,
                isFetchingEv: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default eventsReducer;
