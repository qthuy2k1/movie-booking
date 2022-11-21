const express = require("express");
const orders = require("../controllers/orders.controller");

const router = express.Router();

router.route("/").get(orders.findAllUserOrders).post(orders.create);

module.exports = router;
