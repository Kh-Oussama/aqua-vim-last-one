import ProductsActionsTypes from "./products.types";

const INITIAL_STATE = {
    //products list
    products : [],
    isFetchingPro : true,
    errorMessage: null,

    allProducts : [],
    isFetchingAllPro : true,
    errorMessageAllPro: null,



    //delete product
    productNotFoundError: false,
    deleteLoading : false,

    //get product
    getProductError: null,
    currentProduct : null,
    updateLoading : true,

    //update loading
    updateErrorMessage: null,
    updateStatus : false,


};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // products list
        case ProductsActionsTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetchingPro: true,
                productNotFoundError:false,
                updateStatus: false,
                updateLoading: true,//verfierv update loading in the reference reducer
            };
        case ProductsActionsTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetchingPro: false,
                products: action.payload,

            };
        case ProductsActionsTypes.FETCH_PRODUCTS_FAILURE :
            return {
                ...state,
                isFetchingPro: false,
                errorMessage: action.payload,
            };

            //all products
        case ProductsActionsTypes.FETCH_ALL_PRODUCTS_START:
            return {
                ...state,
                isFetchingAllPro: true,
            };
        case ProductsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetchingAllPro: false,
                allProducts: action.payload,

            };
        case ProductsActionsTypes.FETCH_ALL_PRODUCTS_FAILURE :
            return {
                ...state,
                isFetchingAllPro: false,
                errorMessageAllPro: action.payload,
            };
        //get product
        case ProductsActionsTypes.GET_PRODUCT_START :
            return {
                ...state,
                updateLoading: true,
                getProductError:null,
            }
        case ProductsActionsTypes.GET_PRODUCT_SUCCESS :
            return {
                ...state,
                updateLoading: false,
                getProductError: null,
                currentProduct: action.payload,
            }
        case ProductsActionsTypes.GET_PRODUCT_FAILURE :
            return {
                ...state,
                updateLoading: false,
                getProductError: action.payload,
                currentProduct: null,
            }
        default:
            return state;

    }
};

export default productReducer;
