const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RolesSchema = new Schema(
    {
        _id: { type: String },
        displayName: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true },
    },
    { _id: false }
);

const Roles = mongoose.model("Roles", RolesSchema);

module.exports = Roles;
