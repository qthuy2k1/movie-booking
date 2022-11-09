const Movies = require("../models/movies.model");

exports.create = async (req, res) => {
    const newMovie = new Movies(req.body);
    await newMovie.save();
    return res.status(201).json(newMovie);
};

exports.findAll = async (req, res) => {
    const movies = await Movies.find({}).populate({
        path: "Cinema",
        populate: { path: "Foods" },
    });
    return res.status(200).json(movies);
};

exports.findOne = async (req, res) => {
    const movie = await Movies.findById(req.params.id).populate({
        path: "Cinema",
        populate: { path: "Foods" },
    });
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
