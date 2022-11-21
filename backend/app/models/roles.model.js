const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RolesSchema = new Schema(
    {
        _id: { type: String },
        displayName: { type: String },
        email: { type: String },
        role: { type: String },
    },
    { _id: false }
);

const Roles = mongoose.model("Roles", RolesSchema);

module.exports = Roles;
