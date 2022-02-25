import SlidersActionsTypes from "./slider.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchSlidersFailure, fetchSlidersSuccess} from "./slider.actions";
import Axios from "axios";


export function* fetchSlidersAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/sliders");
        const Sliders = response.data.sliders;
        yield put(fetchSlidersSuccess(Sliders));
    } catch (error) {
        yield put(fetchSlidersFailure(error.message));
    }
}

export function* onFetchSliders() {
    yield takeLatest(SlidersActionsTypes.FETCH_SLIDERS_START, fetchSlidersAsync)
}


export function* sliderSagas() {
    yield all([
        call(onFetchSliders),
    ]);
}

