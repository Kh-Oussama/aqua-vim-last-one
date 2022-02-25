import { createSelector } from 'reselect';

const selectService = state => state.service;

/////////services list
export const selectServices  = createSelector(
    [selectService],
    service => service.services,
);

export const selectIsFetchingServices = createSelector(
    [selectService],
    service => service.isFetchingService,
);


