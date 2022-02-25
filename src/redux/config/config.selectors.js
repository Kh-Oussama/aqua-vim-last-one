import { createSelector } from 'reselect';

const selectConfig = state => state.config;

//update selectors

export const selectUpdateLoading = createSelector(
    [selectConfig],
    config => config.updateLoading,
);

export const selectCurrentConfig = createSelector(
    [selectConfig],
    config => config.currentConfig
);





