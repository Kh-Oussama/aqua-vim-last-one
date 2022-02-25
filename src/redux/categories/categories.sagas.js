import CategoriesActionsTypes from "./categories.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    fetchCategoriesFailure,
    fetchCategoriesSuccess,
    getCategoryFailure,
    getCategorySuccess
} from "./categories.actions";
import Axios from "axios";


export function* fetchCategoriesAsync() {
    try {
        const response = yield Axios.get("https://www.admin.aqua-vim.com/api/categories");
        const Categories = response.data.categories;
        yield put(fetchCategoriesSuccess(Categories));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}


export function* getCategoriesAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/categories/${id}`);
        const Category = response.data.productsCategory;
        yield put(getCategorySuccess(Category));
    } catch (error) {
        yield put(getCategoryFailure(error.message));
    }
}


export function* onFetchCategories() {
    yield takeLatest(CategoriesActionsTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* onGetCategoryStart() {
    yield takeLatest(CategoriesActionsTypes.GET_CATEGORY_START, getCategoriesAsync)
}


export function* CategorySagas() {
    yield all([
        call(onFetchCategories),
        call(onGetCategoryStart),
    ]);
}

