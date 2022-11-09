const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        id: { type: Number },
        MovieTitle: { type: String },
        CinemaName: { type: String },
        Date: { type: String },
        Time: { type: String },
        SeatNumber: { type: Array },
        Price: { type: Number },
        UserID: { type: String },
        Status: { type: String },
    },
    { timestamps: true }
);

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
