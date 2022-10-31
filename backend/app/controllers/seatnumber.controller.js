const { SeatNumber } = require("../models/showtimes.model");

exports.create = async (req, res) => {
    const newSeatNumber = new SeatNumber(req.body);
    await newSeatNumber.save();
    return res.status(201).json(newSeatNumber);
};

exports.findAll = async (req, res) => {
    const seatNumber = await SeatNumber.find({});
    return res.status(200).json(seatNumber);
};
