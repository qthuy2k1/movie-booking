const express = require("express");
const roles = require("../controllers/roles.controller");

const router = express.Router();

router
    .route("/")
    .get(roles.findAll)
    .post(roles.create)
    .put(roles.updateUsersRole);
router.route("/:id").get(roles.findOne).put(roles.update).delete(roles.delete);

module.exports = router;
