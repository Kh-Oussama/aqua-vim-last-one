import CategoriesActionsTypes from "./subcategory.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';

import Axios from "axios";
import {
    fetchSubcategoriesFailure,
    fetchSubcategoriesSuccess,
    getSubcategoryFailure,
    getSubcategorySuccess
} from "./subcategories.actions";


export function* fetchSubcategoriesAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/subcategories/${id}/edit`);
        const Categories = response.data.subcategories;
        yield put(fetchSubcategoriesSuccess(Categories));
    } catch (error) {
        yield put(fetchSubcategoriesFailure(error.message));
    }
}


export function* getSubcategoriesAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/subcategories/${id}`);
        const Category = response.data.productsCategory;
        yield put(getSubcategorySuccess(Category));
    } catch (error) {
        yield put(getSubcategoryFailure(error.message));
    }
}


export function* onFetchSubcategories() {
    yield takeLatest(CategoriesActionsTypes.FETCH_SUBCATEGORIES_START, fetchSubcategoriesAsync)
}

export function* onGetSubcategoryStart() {
    yield takeLatest(CategoriesActionsTypes.GET_SUBCATEGORY_START, getSubcategoriesAsync)
}


export function* SubcategorySagas() {
    yield all([
        call(onFetchSubcategories),
        call(onGetSubcategoryStart),
    ]);
}

