import * as React from "react";
import { connect } from "react-redux";

import { IAppState, IOrderState } from "../store/stateModels";

import MainLayout from "../layouts/Main";
import OrderFilter from "../layouts/OrdersFilter";
import OrdersList from "../layouts/OrdersList";

import AppEvents from "../store/events";

type OrderProps =  {
    orderState: IOrderState;
    dispatch: Function;
}

class Order extends React.Component <OrderProps, {}> {
    componentDidMount() {
        this.props.dispatch({
            type: AppEvents.fetchOrdersRequest
        })
    }

    componentDidUpdate(prevProps: OrderProps) {
        if (this.props.orderState.currentCategoryFilter !== prevProps.orderState.currentCategoryFilter) {
            this.props.dispatch({
                type: AppEvents.fetchOrdersRequest
            })
        }
    }

    onChangeFilter = (filter: string) => () => {
        this.props.dispatch({
            type: AppEvents.filterChanged,
            payload: { filter }
        })
    }

    render() {
        const { orderState } = this.props;
        return (
            <MainLayout>
                <div className="text-center">
                    <h2>List of order</h2>
                    <p>Orders information &amp; payment</p>
                </div>
                <div className="flex">
                    <div className="w-1/3">
                        <OrderFilter
                            changeFilter={this.onChangeFilter}
                            activeFilter={orderState.currentCategoryFilter}
                        />
                    </div>
                    <div className="w-2/3">
                        <OrdersList orderState={orderState} />
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default connect((state: IAppState) => ({
    orderState: state.orderState
}))(Order);