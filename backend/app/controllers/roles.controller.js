const { findByIdAndUpdate } = require("../models/roles.model");
const Roles = require("../models/roles.model");

exports.create = async (req, res) => {
    const newRoles = new Roles(req.body);
    await newRoles.save();
    return res.status(201).json(newRoles);
};

exports.findAll = async (req, res) => {
    const roles = await Roles.find({}).sort("role");
    return res.status(200).json(roles);
};

exports.findOne = async (req, res) => {
    const role = await Roles.findById(req.params.id);
    return res.status(200).json(role);
};

exports.update = async (req, res) => {
    const roleID = req.params.id;
    const newRole = req.body;
    const result = await Roles.findByIdAndUpdate(roleID, newRole);

    return res.status(200).json({ success: true });
};

exports.delete = async (req, res) => {
    const roleID = req.params.id;

    const role = await Roles.findById(roleID);

    await role.remove();

    return res.status(200).json({ success: true });
};

exports.updateUsersRole = async (req, res) => {
    req.body.forEach(async (user) => {
        await Roles.findByIdAndUpdate(user._id, user);
    });

    return res.status(200).json({});
};
