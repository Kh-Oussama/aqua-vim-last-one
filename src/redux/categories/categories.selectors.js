import { createSelector } from 'reselect';

const selectCategory = state => state.category;

/////////categories list
export const selectCategories  = createSelector(
    [selectCategory],
    categories => categories.categories,
);

export const selectIsFetchingCat = createSelector(
    [selectCategory],
    categories => categories.isFetchingCat,
);

//update selectors

export const selectUpdateLoading = createSelector(
    [selectCategory],
    categories => categories.updateLoading,
);

export const selectUpdateError = createSelector(
    [selectCategory],
    categories => categories.updateErrorMessage,
)

export const selectCurrentCategory = createSelector(
    [selectCategory],
    categories => categories.currentCategory
);

export const selectUpdateStatus = createSelector(
    [selectCategory],
    categories => categories.updateStatus,
);




