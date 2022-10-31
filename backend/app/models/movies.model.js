const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    id: { type: Number },
    Title: { type: String, required: true },
    Year: { type: Number },
    Rated: { type: String },
    Released: { type: String, required: true },
    Runtime: { type: String },
    Genres: { type: String },
    Directors: { type: String },
    Actors: { type: String },
    Plot: { type: String },
    Language: { type: String },
    Poster: { type: String },
    Trailer: { type: String },
    Banner: { type: String },
    Cinema: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cinema",
        },
    ],
});

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies;
