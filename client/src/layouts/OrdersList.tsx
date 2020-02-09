import * as React from "react";

import IOrder from "../models/Order";

import { IOrderState } from "../store/stateModels";

type OrderListProps = { orderState: IOrderState };

export default class OrdersList extends React.Component <OrderListProps, {}> {
    render() {
        const { orders } = this.props.orderState;
        return (
            <div>
                <table className="w-full text-center">
                    <thead>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Date order</th>
                        <th>Order ID</th>
                        <th>Total</th>
                    </thead>

                    <tbody>
                        {orders.map((order: IOrder) => <tr>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{order.dateOrder}</td>
                            <td>{order.id}</td>
                            <td>{order.total}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
