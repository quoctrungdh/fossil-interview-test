const orders = require("../data/orders");

const orderTypes = {
    confirm: "confirm"
}

const OrderService = {
    get: function(state = orderTypes.confirm, page = 1, offset = 10) {
        const orderByType = orders.filter(order => order.state === state);
        return {
            total: orders.length,
            total_by_type: orderByType.length,
            page: page,
            per_page: offset,
            total_pages: Math.ceil(orderByType.length / offset),
            data: orderByType.slice((page - 1) * offset, page * offset),
        }
    }
}

module.exports = OrderService;