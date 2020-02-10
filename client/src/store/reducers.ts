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
    currentPage: 1,
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
                currentPage: parseInt(payload.page, 10),
                totalOrdersPerCategory: payload.total_by_type,
                totalOrders: payload.total,
                ordersPerPage: payload.per_pages
            }

        case AppEvents.filterChanged:
            payload = event.payload as { filter: string };

            return {
                ...state,
                currentPage: initialState.currentPage,
                currentCategoryFilter: payload.filter
            }


        case AppEvents.pageChanged:
            payload = event.payload as { page: number };

            return {
                ...state,
                currentPage: payload.page,
            }

        default:
            return state;
    }
}