const Cinema = require("../models/cinema.model");

exports.create = async (req, res) => {
    const newCinema = new Cinema(req.body);
    await newCinema.save();
    return res.status(201).json(newCinema);
};

exports.findAll = async (req, res) => {
    const cinema = await Cinema.find({});
    return res.status(200).json(cinema);
};

exports.findOne = async (req, res) => {
    const cinema = await Cinema.findById(req.params.id);
    return res.status(200).json(cinema);
};
