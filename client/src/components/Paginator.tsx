import * as React from "react";

import { IPaginate } from "../store/stateModels";

interface PaginatorProps {
    paginateInfo: IPaginate;
    changePage: Function;
}

export default class Paginator extends React.Component <PaginatorProps> {
    render() {
        const { paginateInfo, changePage } = this.props;
        const buttonClassName = `p-2 px-4`;
        return (
            <div className="border border-primary-lighter border-t-0 p-4 flex justify-between items-center">
                <span className="text-primary-dark font-thin">You have {paginateInfo.totalOrders} orders</span>

                <div>
                    <button onClick={changePage(1)} className={buttonClassName}>First</button>
                    {Array(paginateInfo.totalPages).fill(0).map((page, index) => {
                        const numberedButtonClassName = `${buttonClassName} ${paginateInfo.currentPage === index + 1 ? "bg-primary-darkest rounded-full text-white" : ""}`;
                        return <button onClick={changePage(index + 1)} className={numberedButtonClassName} key={index}>{index + 1}</button>
                    })}
                    <button onClick={changePage(paginateInfo.totalPages)} className={buttonClassName}>Last</button>
                </div>
            </div>
        )
    }
}