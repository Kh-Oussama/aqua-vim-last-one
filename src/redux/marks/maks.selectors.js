import { createSelector } from 'reselect';

const selectMark = state => state.mark;

/////////mark list
export const selectMarks  = createSelector(
    [selectMark],
    mark => mark.marks,
);

export const selectIsFetchingM = createSelector(
    [selectMark],
    mark => mark.isFetchingM,
);

/////////add selectors
export const selectAddStatus = createSelector(
    [selectMark],
    mark => mark.addStatus
);

export const selectAddError = createSelector(
    [selectMark],
    mark => mark.addErrorMessage
);
export const selectAddLoading = createSelector(
    [selectMark],
    mark => mark.addLoading
);

/////delete selectors
export const selectDeleteLoading = createSelector(
    [selectMark],
    mark => mark.deleteLoading
);
export const selectDeleteError = createSelector(
    [selectMark],
    mark => mark.markNotFoundError
);

//update selectors

export const selectUpdateLoading = createSelector(
    [selectMark],
    mark => mark.updateLoading,
);

export const selectUpdateError = createSelector(
    [selectMark],
    mark => mark.updateErrorMessage,
)

export const selectCurrentMark = createSelector(
    [selectMark],
    mark => mark.currentMark
);

export const selectUpdateStatus = createSelector(
    [selectMark],
    mark => mark.updateStatus,
);




