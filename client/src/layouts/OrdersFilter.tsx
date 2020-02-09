import * as React from "react";

import OrderState from "../models/OrderState";

const orderStates = [
    OrderState.confirm,
    OrderState.process,
    OrderState.waiting,
    OrderState.payment,
    OrderState.success
];

interface OrderFilterProps {
    activeFilter: string;
    changeFilter: Function;
}

export default function OrdersFilter(props: OrderFilterProps) {
    return (
        <ul>
            {orderStates.map((orderState) => {
                const activeClass = props.activeFilter === orderState ? "underline" : "cursor-pointer";
                return <li onClick={props.changeFilter(orderState)} className={activeClass}>{orderState}</li>
            })}
        </ul>
    )
}