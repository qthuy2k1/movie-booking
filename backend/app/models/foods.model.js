const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodsSchema = new Schema({
    id: { type: Number },
    Name: { type: String, required: true },
    Description: { type: String },
    Price: { type: Number },
    Photo: { type: String },
});

const Foods = mongoose.model("Foods", FoodsSchema);

module.exports = Foods;
