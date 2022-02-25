import ConfigActionsTypes from "./config.types";
const INITIAL_STATE = {

    //get Config
    getConfigError: null,
    currentConfig : null,
    updateLoading : true,

};

const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //get config
        case ConfigActionsTypes.GET_CONFIG_START :
            return {
                ...state,
                updateLoading: true,
                getConfigError:null,
            }
        case ConfigActionsTypes.GET_CONFIG_SUCCESS :
            return {
                ...state,
                updateLoading: false,
                getConfigError: null,
                currentConfig: action.payload,
            }
        case ConfigActionsTypes.GET_CONFIG_FAILURE :
            return {
                ...state,
                updateLoading: false,
                getConfigError: action.payload,
                currentConfig: null,
            }

        default:
            return state;
    }
};

export default configReducer;
