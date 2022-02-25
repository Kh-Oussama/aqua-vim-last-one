import CategoriesActionsTypes from "./categories.types";

const INITIAL_STATE = {
    //categories list
    categories: [],
    isFetchingCat: true,

    //get Category
    getCategoryError: null,
    currentCategory: null,
    updateLoading: true,

    //update loading
    updateErrorMessage: null,
    updateStatus: false,


};

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //categories list
        case CategoriesActionsTypes.FETCH_CATEGORIES_START:
            return {
                ...state,
                isFetchingCat: true,
                categoryNotFoundError: false,
                updateStatus: false,
                updateLoading: true,//verfierv update loading in the reference reducer
            };
        case CategoriesActionsTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetchingCat: false,
                categories: action.payload,
            };
        case CategoriesActionsTypes.FETCH_CATEGORIES_FAILURE :
            return {
                ...state,
                isFetchingCat: false,
                errorMessage: action.payload,
            };

        //get category
        case CategoriesActionsTypes.GET_CATEGORY_START :
            return {
                ...state,
                updateLoading: true,
                getCategoryError: null,
            }
        case CategoriesActionsTypes.GET_CATEGORY_SUCCESS :
            return {
                ...state,
                updateLoading: false,
                getCategoryError: null,
                currentCategory: action.payload,
            }
        case CategoriesActionsTypes.GET_CATEGORY_FAILURE :
            return {
                ...state,
                updateLoading: false,
                getCategoryError: action.payload,
                currentCategory: null,
            }
        default:
            return state;

    }
};

export default categoriesReducer;
