import { takeLatest, call, put, select } from "redux-saga/effects";

import HttpService from "../services/http";

import { IAppState } from "./stateModels";
import AppEvents from "./events";

function* fetchOrders() {
    try {
        const state:IAppState = yield select();
        const query = {
            type: state.orderState.currentCategoryFilter,
            page: state.orderState.currentPage
        }

        const ordersData = yield call(HttpService.get, "/orders", query);
        yield put({ type: AppEvents.fetchOrdersSuccess, payload: ordersData });
    } catch (error) {
        console.error(error)
    }
}

export default function* sagas() {
    yield takeLatest(AppEvents.fetchOrdersRequest, fetchOrders)
}