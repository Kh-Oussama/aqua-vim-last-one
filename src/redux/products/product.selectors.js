import { createSelector } from 'reselect';

const selectProduct = state => state.product;

/////////products list
export const selectProducts  = createSelector(
    [selectProduct],
    product => product.products,
);

export const selectIsFetchingPro = createSelector(
    [selectProduct],
    product => product.isFetchingPro,
);

export const selectAllProducts  = createSelector(
    [selectProduct],
    product => product.allProducts,
);

export const selectIsFetchingAllPro = createSelector(
    [selectProduct],
    product => product.isFetchingAllPro,
);

export const selectDeleteError = createSelector(
    [selectProduct],
    product => product.productNotFoundError
);
//update selectors

export const selectUpdateLoading = createSelector(
    [selectProduct],
    product => product.updateLoading,
);

export const selectUpdateError = createSelector(
    [selectProduct],
    product => product.updateErrorMessage,
)

export const selectCurrentProduct = createSelector(
    [selectProduct],
    product => product.currentProduct
);

export const selectUpdateStatus = createSelector(
    [selectProduct],
    product => product.updateStatus,
);




