import MarksActionsTypes from "./marks.types";

import {takeLatest, put, all, call} from 'redux-saga/effects';

import Axios from "axios";
import {
    addMarkFailure,
    addMarkSuccess, clearVariables, deleteMarkFailure, deleteMarkSuccess,
    fetchMarksFailure,
    fetchMarksSuccess,
    getMarkFailure,
    getMarkSuccess, updateMarkFailure, updateMarkSuccess
} from "./marks.actions";



export function* fetchMarksAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/marks");
        const marks = response.data.marks;
        yield put(fetchMarksSuccess(marks));
    } catch (error) {
        yield put(fetchMarksFailure(error.message));
    }
}


export function* addMarksAsync({payload: {formData}}) {
    try {
        const response = yield Axios.post("https://www.admin.aqua-vim.com/api/marks", formData);
        yield put(addMarkSuccess());
    } catch (error) {
        yield put(addMarkFailure(error.response.data));
    }
}

export function* getMarksAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/marks/${id}`);
        const mark = response.data.mark;
        yield put(getMarkSuccess(mark));
    } catch (error) {
        yield put(getMarkFailure(error.message));
    }
}

export function* deleteMarksAsync({payload: {id}}) {
    try {
        const response = yield Axios.delete(`https://www.admin.aqua-vim.com/api/marks/${id}`);
        yield put(deleteMarkSuccess({id: id}));
    } catch (error) {
        console.log(error)
        if (error.response.status === 422) {
            yield put(deleteMarkFailure({id: id}));
        }

    }
}

export function* clearMarksVariables() {
    yield put(clearVariables())
}

export function* updateMarksAsync({payload: {id,formData}}) {
    try {
        const response = yield Axios.post(`https://www.admin.aqua-vim.com/api/marks/${id}`, formData,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
        yield put(updateMarkSuccess());
    } catch (error) {
        yield put(updateMarkFailure(error.response.data));
    }
}

export function* onFetchMarks() {
    yield takeLatest(MarksActionsTypes.FETCH_MARKS_START, fetchMarksAsync)
}

export function* onAddMarkStart() {
    yield takeLatest(MarksActionsTypes.ADD_MARK_START, addMarksAsync)
}

export function* onDeleteMarkStart() {
    yield takeLatest(MarksActionsTypes.DELETE_MARK_START, deleteMarksAsync)
}

export function* onGetMarkStart() {
    yield takeLatest(MarksActionsTypes.GET_MARK_START, getMarksAsync)
}

export function* onUpdateMarkStart() {
    yield takeLatest(MarksActionsTypes.UPDATE_MARK_START, updateMarksAsync)
}

// export function* onUserSignOutFct() {
//     yield takeLatest(MarksActionTypes.SIGN_OUT_SUCCESS, clearEventsVariables)
// }

export function* MarkSagas() {
    yield all([
        call(onFetchMarks),
        call(onAddMarkStart),
        call(onDeleteMarkStart),
        call(onGetMarkStart),
        call(onUpdateMarkStart),
        // call(onUserSignOutFct),
    ]);
}

