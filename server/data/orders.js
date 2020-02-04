const confirmOrders = require("./orders/confirmOrders.json");
const processOrders = require("./orders/processOrders.json");
const waitingOrders = require("./orders/waitingOrders.json");
const paymentOrders = require("./orders/paymentOrders.json");
const successOrders = require("./orders/successOrders.json");

module.exports = [
    ...confirmOrders,
    ...processOrders,
    ...waitingOrders,
    ...paymentOrders,
    ...successOrders
]