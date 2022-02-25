import ConfigActionsTypes from "./config.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getConfigFailure, getConfigSuccess, updateConfigFailure, updateConfigSuccess} from "./config.actions";
import Axios from "axios";



export function* getConfigAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/config");
        const Config = response.data.config;
        yield put(getConfigSuccess(Config));
    } catch (error) {
        yield put(getConfigFailure(error.message));
    }
}


export function* onGetConfigStart() {
    yield takeLatest(ConfigActionsTypes.GET_CONFIG_START, getConfigAsync)
}




export function* ConfigSagas() {
    yield all([
        call(onGetConfigStart),
    ]);
}

