export interface IOrderState {
    orders: [];
    totalOrders: number;
    totalOrdersPerCategory: number;
    currentCategoryFilter: string;
    totalPages: number;
    currentPage: number;
    ordersPerPage: number;
}