import ServicesActionsTypes from "./services.types";

export const fetchServicesStart = () => ({
    type : ServicesActionsTypes.FETCH_SERVICES_START,
});

export const fetchServicesSuccess = services => ({
    type : ServicesActionsTypes.FETCH_SERVICES_SUCCESS,
    payload : services,
});

export const fetchServicesFailure = errorMessage => ({
    type : ServicesActionsTypes.FETCH_SERVICES_FAILURE,
    payload : errorMessage,
});


