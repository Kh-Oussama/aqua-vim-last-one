import SubcategoriesActionsTypes from "./subcategory.types";

const INITIAL_STATE = {
    //subcategories list
    subcategories : [],
    isFetchingSubCat : true,

    //get Category
    getSubcategoryError: null,
    currentSubcategory : null,
    updateLoading : true,

    //update loading
    updateErrorMessage: null,
    updateStatus : false,


};

const subcategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //categories list
        case SubcategoriesActionsTypes.FETCH_SUBCATEGORIES_START:
            return {
                ...state,
                isFetchingSubCat: true,
                subcategoryNotFoundError:false,
                updateStatus: false,
                updateLoading: true,//verfierv update loading in the reference reducer
            };
        case SubcategoriesActionsTypes.FETCH_SUBCATEGORIES_SUCCESS:
            return {
                ...state,
                isFetchingSubCat: false,
                subcategories: action.payload,
            };
        case SubcategoriesActionsTypes.FETCH_SUBCATEGORIES_FAILURE :
            return {
                ...state,
                isFetchingSubCat: false,
                errorMessage: action.payload
                };

        //get sub
        case SubcategoriesActionsTypes.GET_SUBCATEGORY_START :
            return {
                ...state,
                updateLoading: true,
                getSubcategoryError:null,
            }
        case SubcategoriesActionsTypes.GET_SUBCATEGORY_SUCCESS :
            return {
                ...state,
                updateLoading: false,
                getSubcategoryError: null,
                currentSubcategory: action.payload,
            }
        case SubcategoriesActionsTypes.GET_SUBCATEGORY_FAILURE :
            return {
                ...state,
                updateLoading: false,
                getSubcategoryError: action.payload,
                currentSubcategory: null,
            }
        default:
            return state;

    }
};

export default subcategoryReducer;
