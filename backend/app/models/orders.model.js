const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId },
        MovieTitle: { type: String, required: true },
        CinemaName: { type: String, required: true },
        Date: { type: String, required: true },
        Time: { type: String, required: true },
        SeatNumber: { type: Array, required: true },
        Price: { type: Number, required: true },
        UserID: { type: String, required: true },
        Status: { type: String, required: true },
    },
    { timestamps: true }
);

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
