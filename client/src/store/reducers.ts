import { IOrderState } from "./stateModels";

import OrderState from "../models/OrderState";

import AppEvents from "./events";

import { IReduxEvent, OrderDTO } from "./utils";

const initialState: IOrderState = {
    orders: [],
    totalOrders: 0,
    totalOrdersPerCategory: 0,
    currentCategoryFilter: OrderState.confirm,
    totalPages: 0,
    currentPage: 0,
    ordersPerPage: 10
}

export function ordersReducer(state: IOrderState = initialState, event: IReduxEvent): IOrderState {
    let payload;

    switch (event.type) {
        case AppEvents.fetchOrdersSuccess:
            payload = event.payload as OrderDTO;
            return {
                ...state,
                orders: payload.data,
                totalPages: payload.total_pages,
                currentPage: payload.page,
                totalOrdersPerCategory: payload.total,
                ordersPerPage: payload.per_pages
            }

        case AppEvents.filterChanged:
            payload = event.payload as { filter: string };

            return {
                ...state,
                currentCategoryFilter: payload.filter
            }

        default:
            return state;
    }
}