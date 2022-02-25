import ServicesActionsTypes from "./services.types";

const INITIAL_STATE = {
    //services list
    services : [],
    isFetchingService : true,

};

const servicesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //services list
        case ServicesActionsTypes.FETCH_SERVICES_START:
            return {
                ...state,
                isFetchingService: true,
            };
        case ServicesActionsTypes.FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                isFetchingService: false,
                services: action.payload,
            };
        case ServicesActionsTypes.FETCH_SERVICES_FAILURE :
            return {
                ...state,
                isFetchingService: false,
            };

        default:
            return state;

    }
};

export default servicesReducer;
