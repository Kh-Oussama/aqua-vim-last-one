import SlidersActionsTypes from "./slider.types";

export const fetchSlidersStart = () => ({
    type : SlidersActionsTypes.FETCH_SLIDERS_START,
});


export const fetchSlidersSuccess = sliders => ({
    type : SlidersActionsTypes.FETCH_SLIDERS_SUCCESS,
    payload : sliders,
});

export const fetchSlidersFailure = errorMessage => ({
    type : SlidersActionsTypes.FETCH_SLIDERS_FAILURE,
    payload : errorMessage,
});

