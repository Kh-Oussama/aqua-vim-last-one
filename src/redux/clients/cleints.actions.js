import ClientsActionsTypes from "./clients.types";


export const addClientStart = clientInformation =>  ({
    type : ClientsActionsTypes.ADD_CLIENT_START,
    payload : clientInformation
});

export const addClientSuccess = () =>  ({
    type : ClientsActionsTypes.ADD_CLIENT_SUCCESS,
});

export const addClientFailure = errorMessage => ({
    type : ClientsActionsTypes.ADD_CLIENT_FAILURE,
    payload : errorMessage,
});

export const sendMessageStart = messageInformation =>  ({
    type : ClientsActionsTypes.SEND_MESSAGE_START,
    payload : messageInformation
});

export const sendMessageSuccess = () =>  ({
    type : ClientsActionsTypes.SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = errorMessage => ({
    type : ClientsActionsTypes.SEND_MESSAGE_FAILURE,
    payload : errorMessage,
});
