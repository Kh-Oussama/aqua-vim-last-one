import ConfigActionsTypes from "./config.types";

export const getConfigStart = () =>  ({
    type : ConfigActionsTypes.GET_CONFIG_START,
});

export const getConfigSuccess = config =>  ({
    type : ConfigActionsTypes.GET_CONFIG_SUCCESS,
    payload : config,
});

export const getConfigFailure = errorMessage => ({
    type : ConfigActionsTypes.GET_CONFIG_FAILURE,
    payload : errorMessage,
});
