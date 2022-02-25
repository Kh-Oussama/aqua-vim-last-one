import ClientsActionsTypes from "./clients.types";

const INITIAL_STATE = {
    //add client
    addErrorMessage: null,
    addLoading : false,
    addStatus : false,

    //msg
    sendErrorMessage: null,
    sendMsgLoading : false,
    sendMsgStatus : false,
};

const clientsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        //Add client
        case ClientsActionsTypes.ADD_CLIENT_START :
            return {
                ...state,
                addLoading: true,
                addStatus : false,
                addErrorMessage: null,
            }
        case ClientsActionsTypes.ADD_CLIENT_SUCCESS :
            return {
                ...state,
                addStatus: true,
                addLoading: false,
                addErrorMessage: null,
            }
        case ClientsActionsTypes.ADD_CLIENT_FAILURE :
            return {
                ...state,
                addStatus: false,
                addErrorMessage: action.payload,
                addLoading: false,
            }

            //send message
        case ClientsActionsTypes.SEND_MESSAGE_START :
            return {
                ...state,
                sendMsgLoading: true,
                sendMsgStatus : false,
                sendErrorMessage: null,
            }
        case ClientsActionsTypes.SEND_MESSAGE_SUCCESS :
            return {
                ...state,
                sendMsgStatus: true,
                sendMsgLoading: false,
                sendErrorMessage: null,
            }
        case ClientsActionsTypes.SEND_MESSAGE_FAILURE :
            return {
                ...state,
                sendMsgStatus: false,
                sendErrorMessage: action.payload,
                sendMsgLoading: false,
            }

        default:
            return state;

    }
};

export default clientsReducer;
