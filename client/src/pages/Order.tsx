import * as React from "react";
import { connect } from "react-redux";

import { IAppState, IOrderState } from "../store/stateModels";

import MainLayout from "../layouts/Main";

import OrderFilter from "../components/OrdersFilter";
import OrdersList from "../components/OrdersList";
import Paginator from "../components/Paginator";

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

        if (this.props.orderState.currentPage !== prevProps.orderState.currentPage) {
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

    onChangePage = (page: number) => () => {
        this.props.dispatch({
            type: AppEvents.pageChanged,
            payload: { page }
        })
    }

    render() {
        const { orderState } = this.props;
        const { orders, ...paginateInfo } = orderState;

        return (
            <MainLayout className="flex-1 flex flex-col">
                <div className="text-center p-6">
                    <h2 className="text-4xl font-medium leading-none">List of order</h2>
                    <p className="font-light">Orders information &amp; payment</p>
                </div>
                <div className="border-t border-b border-primary-lightest">
                    <p className="wrapper mx-auto p-2 text-sm text-light">
                        <button>
                        &lt; back
                        </button>
                    </p>
                </div>
                <div className="flex items-stretch flex-1">
                    <div className="w-1/4 xl:w-1/3 bg-primary-lightest text-right">
                        <OrderFilter
                            changeFilter={this.onChangeFilter}
                            activeFilter={orderState.currentCategoryFilter}
                        />
                    </div>
                    <div className="w-3/4 xl:w-2/3 max-w-4xl p-4">
                        <OrdersList orderState={orderState} />
                        <Paginator
                            paginateInfo={paginateInfo}
                            changePage={this.onChangePage}
                        />
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default connect((state: IAppState) => ({
    orderState: state.orderState
}))(Order);