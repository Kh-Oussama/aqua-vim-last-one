import EventsActionsTypes from "./events.types";

export const fetchEventsStart = () => ({
    type : EventsActionsTypes.FETCH_EVENTS_START,
});

export const fetchEventsSuccess = event => ({
    type : EventsActionsTypes.FETCH_EVENTS_SUCCESS,
    payload : event,
});

export const fetchEventsFailure = errorMessage => ({
    type : EventsActionsTypes.FETCH_EVENTS_FAILURE,
    payload : errorMessage,
});