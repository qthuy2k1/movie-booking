const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeatNumberSchema = new Schema({
    id: { type: Number },
    Number: { type: Number },
    Status: { type: String },
});

const SeatListSchema = new Schema({
    id: { type: Number },
    SeatName: { type: String },
    Type: { type: String },
    Price: { type: Number },
    SeatNumber: [SeatNumberSchema],
});

const ShowTimesSchema = new Schema({
    id: { type: Number },
    Date: { type: String },
    Time: { type: String },
    SeatList: [SeatListSchema],
});

const CinemaSchema = new Schema({
    id: { type: Number },
    Name: { type: String, required: true },
    Seats: { type: Number },
    ShowTimes: [ShowTimesSchema],
    Foods: [
        {
            type: Schema.Types.ObjectId,
            ref: "Foods",
        },
    ],
});

const Cinema = mongoose.model("Cinema", CinemaSchema);

module.exports = Cinema;
