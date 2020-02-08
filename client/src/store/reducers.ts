import { IOrderState } from "./stateModels";

import AppEvents from "./events";

import { IReduxEvent, OrderDTO } from "./utils";

const initialState: IOrderState = {
    orders: [],
    totalOrders: 0,
    totalOrdersPerCategory: 0,
    currentCategoryFilter: "confirm",
    totalPages: 0,
    currentPage: 0,
    ordersPerPage: 10
}

export function ordersReducer(state: IOrderState = initialState, event: IReduxEvent): IOrderState {
    switch (event.type) {
        case AppEvents.fetchOrdersSuccess:
            const payload = event.payload as OrderDTO;
            return {
                ...state,
                orders: payload.data,
                totalPages: payload.total_pages,
                currentPage: payload.page,
                totalOrdersPerCategory: payload.total,
                ordersPerPage: payload.per_pages
            }

        default:
            return state;
    }
}