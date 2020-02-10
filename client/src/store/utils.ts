export interface IReduxEvent {
    type: string;
    payload: object;
}

export interface OrderDTO {
    data: [];
    total_pages: number;
    page: string;
    total: number;
    total_by_type: number;
    per_pages: number;
}