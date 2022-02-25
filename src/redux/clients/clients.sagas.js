import ClientsActionsTypes from "./clients.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';

import Axios from "axios";
import {addClientFailure, addClientSuccess, sendMessageFailure, sendMessageSuccess} from "./cleints.actions";

export function* addClientAsync({payload: {formData}}) {
    try {
        const response = yield Axios.post("https://www.admin.aqua-vim.com/api/clients", formData);
        yield put(addClientSuccess());
    } catch (error) {
        yield put(addClientFailure(error.response.data));
    }
}

export function* sendMsgStartAsync({payload: {formData}}) {
    try {
        const response = yield Axios.post("https://www.admin.aqua-vim.com/api/messages", formData);
        yield put(sendMessageSuccess());
    } catch (error) {
        yield put(sendMessageFailure(error.response.data));
    }
}


export function* onAddClientStart() {
    yield takeLatest(ClientsActionsTypes.ADD_CLIENT_START, addClientAsync)
}

export function* onSendMsgStart() {
    yield takeLatest(ClientsActionsTypes.SEND_MESSAGE_START, sendMsgStartAsync)
}

export function* ClientSagas() {
    yield all([
        call(onAddClientStart),
        call(onSendMsgStart),
    ]);
}

