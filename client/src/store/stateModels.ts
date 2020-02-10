export interface IAppState {
    orderState: IOrderState;
}

export interface IPaginate {
    totalOrders: number;
    totalOrdersPerCategory: number;
    currentCategoryFilter: string;
    totalPages: number;
    currentPage: number | string;
    ordersPerPage: number;
}

export type IOrderState = IPaginate & {
    orders: [];
}