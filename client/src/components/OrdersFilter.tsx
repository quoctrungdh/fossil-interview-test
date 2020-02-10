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
        <ul className="inline-block mt-6 text-sm uppercase font-medium">
            {orderStates.map((orderState) => {
                const activeClass = props.activeFilter === orderState ? "bg-primary-darkest text-white" : "cursor-pointer";
                return <li
                    key={orderState}
                    onClick={props.changeFilter(orderState)}
                    className={`py-2 px-10 lg:px-20 border-b border-primary-lighter ${activeClass}`}
                >
                    {orderState}
                </li>
            })}
        </ul>
    )
}