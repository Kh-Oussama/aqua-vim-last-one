import { createSelector } from 'reselect';

const selectReference = state => state.reference;

/////////references list
export const selectReferences  = createSelector(
    [selectReference],
    reference => reference.references,
);

export const selectIsFetchingRef = createSelector(
    [selectReference],
    reference => reference.isFetchingRef,
);