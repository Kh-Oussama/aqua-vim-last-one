import SubcategoriesActionsTypes from "./subcategory.types";

export const fetchSubcategoriesStart = category => ({
    type: SubcategoriesActionsTypes.FETCH_SUBCATEGORIES_START,
    payload: category
});

export const fetchSubcategoriesSuccess = subcategory => ({
    type: SubcategoriesActionsTypes.FETCH_SUBCATEGORIES_SUCCESS,
    payload: subcategory,
});

export const fetchSubcategoriesFailure = errorMessage => ({
    type: SubcategoriesActionsTypes.FETCH_SUBCATEGORIES_FAILURE,
    payload: errorMessage,
});


export const getSubcategoryStart = subcategory => ({
    type: SubcategoriesActionsTypes.GET_SUBCATEGORY_START,
    payload: subcategory,
});

export const getSubcategorySuccess = subcategory => ({
    type: SubcategoriesActionsTypes.GET_SUBCATEGORY_SUCCESS,
    payload: subcategory,
});

export const getSubcategoryFailure = errorMessage => ({
    type: SubcategoriesActionsTypes.GET_SUBCATEGORY_FAILURE,
    payload: errorMessage,
});

