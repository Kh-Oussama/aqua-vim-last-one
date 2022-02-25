import CategoriesActionsTypes from "./categories.types";

export const fetchCategoriesStart = () => ({
    type: CategoriesActionsTypes.FETCH_CATEGORIES_START,
});


export const fetchCategoriesSuccess = category => ({
    type: CategoriesActionsTypes.FETCH_CATEGORIES_SUCCESS,
    payload: category,
});

export const fetchCategoriesFailure = errorMessage => ({
    type: CategoriesActionsTypes.FETCH_CATEGORIES_FAILURE,
    payload: errorMessage,
});

export const getCategoryStart = category => ({
    type: CategoriesActionsTypes.GET_CATEGORY_START,
    payload: category,
});

export const getCategorySuccess = category => ({
    type: CategoriesActionsTypes.GET_CATEGORY_SUCCESS,
    payload: category,
});

export const getCategoryFailure = errorMessage => ({
    type: CategoriesActionsTypes.GET_CATEGORY_FAILURE,
    payload: errorMessage,
});
