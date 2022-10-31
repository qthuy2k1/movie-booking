const { ShowTimes } = require("../models/showtimes.model");

exports.create = async (req, res) => {
    const newShowTimes = new ShowTimes(req.body);
    await newShowTimes.save();
    return res.status(201).json(newShowTimes);
};

exports.findAll = async (req, res) => {
    const showTimes = await ShowTimes.find({});
    return res.status(200).json(showTimes);
};

exports.findOne = async (req, res) => {
    const showTime = await ShowTimes.findById(req.params.id);
    return res.status(200).json(showTime);
};
