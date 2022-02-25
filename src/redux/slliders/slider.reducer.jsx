import SlidersActionsTypes from "./slider.types";

const INITIAL_STATE = {
    //sliders list
    sliders : [],
    isFetching : true,

};

const sliderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //sliders list
        case SlidersActionsTypes.FETCH_SLIDERS_START:
            return {
                ...state,
                isFetching: true,
            };
        case SlidersActionsTypes.FETCH_SLIDERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                sliders: action.payload,
            };
        case SlidersActionsTypes.FETCH_SLIDERS_FAILURE :
            return {
                ...state,
                isFetching: false,
                // errorMessage: action.payload,
            };
        default:
            return state;

    }
};

export default sliderReducer;
