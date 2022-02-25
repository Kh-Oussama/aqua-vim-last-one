import ServicesActionsTypes from "./services.types";
import {takeLatest, put, all, call} from 'redux-saga/effects';

import Axios from "axios";
import {
    addServiceFailure,
    addServiceSuccess, deleteServiceFailure, deleteServiceSuccess,
    fetchServicesFailure,
    fetchServicesSuccess, getServiceFailure,
    getServiceSuccess, updateServiceFailure, updateServiceSuccess
} from "./services.actions";


export function* fetchServicesAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/services");
        const services = response.data.services;
        console.log(services);
        yield put(fetchServicesSuccess(services));
    } catch (error) {
        yield put(fetchServicesFailure(error.message));
    }
}





export function* onFetchServices() {
    yield takeLatest(ServicesActionsTypes.FETCH_SERVICES_START, fetchServicesAsync)
}




export function* ServiceSagas() {
    yield all([
        call(onFetchServices),
    ]);
}

