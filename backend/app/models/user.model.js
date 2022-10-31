const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Role",
        },
    ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
