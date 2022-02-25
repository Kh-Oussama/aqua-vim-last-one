import EventsActionsTypes from "./events.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';

import Axios from "axios";
import {fetchEventsFailure, fetchEventsSuccess} from "./events.actions";


export function* fetchEventsAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/events");
        const events = response.data.events;
        yield put(fetchEventsSuccess(events));
    } catch (error) {
        yield put(fetchEventsFailure(error.message));
    }
}

export function* onFetchEvents() {
    yield takeLatest(EventsActionsTypes.FETCH_EVENTS_START, fetchEventsAsync)
}

export function* EventSagas() {
    yield all([
        call(onFetchEvents),
    ]);
}

