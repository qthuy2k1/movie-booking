const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId },
        Title: { type: String, required: true },
        Year: { type: Number, required: true },
        Rated: { type: String, required: true },
        Released: { type: String, required: true },
        Runtime: { type: String, required: true },
        Genres: { type: String, required: true },
        Directors: { type: String, required: true },
        Actors: { type: String },
        Plot: { type: String, required: true },
        Language: { type: String, required: true },
        Poster: { type: String, required: true },
        Trailer: { type: String, required: true },
        Banner: { type: String, required: true },
        Cinema: [
            {
                type: Schema.Types.ObjectId,
                ref: "Cinema",
            },
        ],
        Status: { type: String, required: true },
    },
    { timestamps: true }
);

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies;
