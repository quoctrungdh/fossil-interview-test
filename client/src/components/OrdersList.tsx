import * as React from "react";

import IOrder from "../models/Order";

import { IOrderState } from "../store/stateModels";

type OrderListProps = { orderState: IOrderState };

export default class OrdersList extends React.Component <OrderListProps, {}> {
    render() {
        const { orders } = this.props.orderState;
        const thClassName = "py-2 font-normal";
        return (
            <div>
                <p>You have <span className="text-green-500">{this.props.orderState.totalOrdersPerCategory}</span> orders, waiting for your confirm</p>
                <table className="mt-2 w-full text-center">
                    <thead className="bg-primary-darkest text-white">
                        <tr>
                            <th className={thClassName}>Name</th>
                            <th className={thClassName}>Quantity</th>
                            <th className={thClassName}>Date order</th>
                            <th className={thClassName}>Order ID</th>
                            <th className={thClassName}>Total</th>
                        </tr>
                    </thead>

                    <tbody className="border border-primary-lighter font-light">
                        {orders.map((order: IOrder) => <tr key={order.id} className="border-b">
                            <td className="p-4 text-left">
                                <p className="mb-1 font-medium">{order.name}</p>
                                <p><span className="py-1 px-16 rounded-full text-sm bg-primary-lightest">LVX</span></p>
                            </td>
                            <td>{order.quantity}</td>
                            <td>{order.dateOrder}</td>
                            <td>{order.id}</td>
                            <td className="font-medium text-right p-4">{order.total}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
