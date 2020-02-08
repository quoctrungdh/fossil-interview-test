const express = require("express");
const cors = require("cors");
const orderService = require("./services/order");

const app = express();

app.use(cors())

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello there")
})

app.get("/orders", (req, res) => {
    const { page, type } = req.query;
    const orders = orderService.get(type, page);
    res.send(orders);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})