export interface IReduxEvent {
    type: string;
    payload: object;
}

export interface OrderDTO {
    data: [];
    total_pages: number;
    page: number;
    total: number;
    total_by_type: number;
    per_pages: number;
}