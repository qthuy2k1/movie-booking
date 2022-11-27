const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeatNumberSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    Number: { type: Number, required: true },
    Status: { type: String, required: true },
});

const SeatListSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    SeatName: { type: String, required: true },
    Type: { type: String, required: true },
    Price: { type: Number, required: true },
    SeatNumber: [SeatNumberSchema],
});

const ShowTimesSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    Date: { type: String, required: true },
    Time: { type: String, required: true },
    SeatList: [SeatListSchema],
});

const CinemaSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId },
        Name: { type: String, required: true },
        Seats: { type: Number, required: true },
        ShowTimes: [ShowTimesSchema],
        Foods: [
            {
                type: Schema.Types.ObjectId,
                ref: "Foods",
                required: true,
            },
        ],
    },
    { timestamps: true }
);

const Cinema = mongoose.model("Cinema", CinemaSchema);

module.exports = Cinema;
