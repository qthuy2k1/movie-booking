const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        id: { type: Number },
        Username: { type: String, required: true },
        MovieTitle: { type: String },
        CinemaName: { type: String },
        Date: { type: String },
        Time: { type: String },
        SeatNumber: { type: Array },
        Price: { type: Number },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
