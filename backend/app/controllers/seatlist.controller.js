const { SeatList } = require("../models/showtimes.model");

exports.create = async (req, res) => {
    const newSeatList = new SeatList(req.body);
    await newSeatList.save();
    return res.status(201).json(newSeatList);
};

exports.findAll = async (req, res) => {
    const seatList = await SeatList.find({});
    return res.status(200).json(seatList);
};
