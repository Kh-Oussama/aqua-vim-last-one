import ReferencesActionsTypes from "./reference.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchReferencesFailure, fetchReferencesSuccess} from "./reference.actions";
import Axios from "axios";


export function* fetchReferencesAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/references");
        const References = response.data.references;
        yield put(fetchReferencesSuccess(References));
    } catch (error) {
        yield put(fetchReferencesFailure(error.message));
    }
}


export function* onFetchReferences() {
    yield takeLatest(ReferencesActionsTypes.FETCH_REFERENCES_START, fetchReferencesAsync)
}

export function* ReferenceSagas() {
    yield all([
        call(onFetchReferences),
    ]);
}

