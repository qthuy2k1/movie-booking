const Movies = require("../models/movies.model");
const Cinema = require("../models/cinema.model");
const Foods = require("../models/foods.model");
const ShowTimes = require("../models/showtimes.model");

exports.create = async (req, res) => {
    const newMovie = new Movies(req.body);
    await newMovie.save();
    return res.status(201).json(newMovie);
};

exports.findAll = async (req, res) => {
    const movies = await Movies.find({});
    return res.status(200).json(movies);
};

exports.findOne = async (req, res) => {
    const movie = await Movies.findById(req.params.id);
    return res.status(200).json(movie);
};

exports.update = async (req, res) => {
    const movieID = req.params.id;
    const newMovie = req.body;
    const result = await Movies.findByIdAndUpdate(movieID, newMovie);

    return res.status(200).json({ success: true });
};

exports.delete = async (req, res) => {
    const movieID = req.params.id;

    const movie = await Movies.findById(movieID);

    await movie.remove();

    return res.status(200).json({ success: true });
};
