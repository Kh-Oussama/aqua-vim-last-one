import { createSelector } from 'reselect';

const selectSubcategory = state => state.subcategory;

/////////subcategories list
export const selectSubcategories  = createSelector(
    [selectSubcategory],
    subcategory => subcategory.subcategories,
);

export const selectIsFetchingSubCat = createSelector(
    [selectSubcategory],
    subcategory => subcategory.isFetchingSubCat,
);
//update selectors

export const selectUpdateLoading = createSelector(
    [selectSubcategory],
    subcategory => subcategory.updateLoading,
);

export const selectUpdateError = createSelector(
    [selectSubcategory],
    subcategory => subcategory.updateErrorMessage,
)

export const selectCurrentSubcategory = createSelector(
    [selectSubcategory],
    subcategory => subcategory.currentSubcategory
);

export const selectUpdateStatus = createSelector(
    [selectSubcategory],
    subcategory => subcategory.updateStatus,
);




