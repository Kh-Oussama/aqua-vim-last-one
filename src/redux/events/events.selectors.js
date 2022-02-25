import { createSelector } from 'reselect';

const selectEvent = state => state.event;

/////////Events list
export const selectEvents  = createSelector(
    [selectEvent],
    event => event.events,
);

export const selectIsFetchingEv = createSelector(
    [selectEvent],
    event => event.isFetchingEv,
);

/////////add selectors
export const selectAddStatus = createSelector(
    [selectEvent],
    event => event.addStatus
);

export const selectAddError = createSelector(
    [selectEvent],
    event => event.addErrorMessage
);
export const selectAddLoading = createSelector(
    [selectEvent],
    event => event.addLoading
);

/////delete selectors
export const selectDeleteLoading = createSelector(
    [selectEvent],
    event => event.deleteLoading
);
export const selectDeleteError = createSelector(
    [selectEvent],
    event => event.eventNotFoundError
);

//update selectors

export const selectUpdateLoading = createSelector(
    [selectEvent],
    event => event.updateLoading,
);

export const selectUpdateError = createSelector(
    [selectEvent],
    event => event.updateErrorMessage,
)

export const selectCurrentEvent = createSelector(
    [selectEvent],
    event => event.currentEvent
);

export const selectUpdateStatus = createSelector(
    [selectEvent],
    event => event.updateStatus,
);




