import ProductsActionsTypes from "./products.types";
import {all, call, put, takeLatest} from 'redux-saga/effects';

import Axios from "axios";
import {
    fetchAllProductsFailure,
    fetchAllProductsSuccess,
    fetchProductsFailure,
    fetchProductsSuccess,
    getProductFailure,
    getProductSuccess
} from "./products.actions";


export function* fetchProductsAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/products/${id}/edit`);
        const Products = response.data.products
        yield put(fetchProductsSuccess(Products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* fetchAllProductsAsync() {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/products`);
        const Products = response.data.products
        yield put(fetchAllProductsSuccess(Products));
    } catch (error) {
        yield put(fetchAllProductsFailure(error.message));
    }
}


export function* getProductAsync({payload: {id}}) {
    try {
        const response = yield Axios.get(`https://www.admin.aqua-vim.com/api/products/${id}`);
        const Product = response.data.product;
        yield put(getProductSuccess(Product));
    } catch (error) {
        yield put(getProductFailure(error.message));
    }
}


export function* onFetchProducts() {
    yield takeLatest(ProductsActionsTypes.FETCH_PRODUCTS_START, fetchProductsAsync)
}

export function* onFetchAllProducts() {
    yield takeLatest(ProductsActionsTypes.FETCH_ALL_PRODUCTS_START, fetchAllProductsAsync)
}


export function* onGetProductStart() {
    yield takeLatest(ProductsActionsTypes.GET_PRODUCT_START, getProductAsync)
}

export function* ProductSagas() {
    yield all([
        call(onFetchProducts),
        call(onFetchAllProducts),
        call(onGetProductStart),
    ]);
}

