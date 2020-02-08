import * as React from "react";
import { connect } from "react-redux";

import { IOrderState } from "../store/stateModels";

import MainLayout from "../layouts/Main";
import OrdersManagement from "../layouts/Orders";

import AppEvents from "../store/events";

type OrderProps = IOrderState & { dispatch: Function; }

class Order extends React.Component <OrderProps, {}> {
    componentDidMount() {
        this.props.dispatch({
            type: AppEvents.orderViewMounted
        })
    }

    render() {
        console.log(this.props)
        return (
            <MainLayout>
                <OrdersManagement />
            </MainLayout>
        )
    }
}

export default connect((state: IOrderState) => state)(Order);