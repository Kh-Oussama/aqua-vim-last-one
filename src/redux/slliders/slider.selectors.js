import { createSelector } from 'reselect';

const selectSlider = state => state.slider;

/////////sliders list
export const selectSliders  = createSelector(
    [selectSlider],
    slider => slider.sliders,
);

export const selectIsFetching = createSelector(
    [selectSlider],
    slider => slider.isFetching,
);