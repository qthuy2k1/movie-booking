const Foods = require("../models/foods.model");

exports.create = async (req, res) => {
    const newFoods = new Foods(req.body);
    await newFoods.save();
    return res.status(201).json(newFoods);
};

exports.findAll = async (req, res) => {
    const foods = await Foods.find({});
    return res.status(200).json(foods);
};

exports.findOne = async (req, res) => {
    const food = await Foods.findById(req.params.id);
    return res.status(200).json(food);
};
