import { takeLatest, call, put } from "redux-saga/effects";

import HttpService from "../services/http";

import AppEvents from "./events";

function* fetchOrders() {
    try {
        const ordersData = yield call(HttpService.get, "/orders", {});
        yield put({ type: AppEvents.fetchOrdersSuccess, payload: ordersData });
    } catch (error) {
        console.error(error)
    }
}

export default function* sagas() {
    yield takeLatest(AppEvents.orderViewMounted, fetchOrders)
}