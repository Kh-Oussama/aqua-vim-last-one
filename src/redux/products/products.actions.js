import ProductsActionsTypes from "./products.types";

export const fetchProductsStart = subcategory => ({
    type : ProductsActionsTypes.FETCH_PRODUCTS_START,
    payload : subcategory
});

export const fetchProductsSuccess = product => ({
    type : ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS,
    payload : product,
});

export const fetchProductsFailure = errorMessage => ({
    type : ProductsActionsTypes.FETCH_PRODUCTS_FAILURE,
    payload : errorMessage,
});

export const fetchAllProductsStart = () => ({
    type : ProductsActionsTypes.FETCH_ALL_PRODUCTS_START,
});


export const fetchAllProductsSuccess = product => ({
    type : ProductsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload : product,
});

export const fetchAllProductsFailure = errorMessage => ({
    type : ProductsActionsTypes.FETCH_ALL_PRODUCTS_FAILURE,
    payload : errorMessage,
});

export const getProductStart = product =>  ({
    type : ProductsActionsTypes.GET_PRODUCT_START,
    payload : product,
});

export const getProductSuccess = product =>  ({
    type : ProductsActionsTypes.GET_PRODUCT_SUCCESS,
    payload : product,
});

export const getProductFailure = errorMessage => ({
    type : ProductsActionsTypes.GET_PRODUCT_FAILURE,
    payload : errorMessage,
});
