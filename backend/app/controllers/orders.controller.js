const Orders = require("../models/orders.model");

exports.create = async (req, res) => {
    const newOrder = new Orders(req.body);
    await newOrder.save();
    return res.status(201).json(newOrder);
};

exports.findAllUserOrders = async (req, res) => {
    const order = await Orders.find({});
    return res.status(200).json(order);
};

exports.findOne = async (req, res) => {
    const order = await Orders.findById(req.params.id);
    return res.status(200).json(order);
};
