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
    Date: { type: Date },
    Time: { type: String },
    SeatList: [SeatListSchema],
});

const SeatNumber = mongoose.model("SeatNumber", SeatListSchema);
const SeatList = mongoose.model("SeatList", SeatListSchema);
const ShowTimes = mongoose.model("ShowTimes", ShowTimesSchema);

module.exports = { SeatNumber, SeatList, ShowTimes };
