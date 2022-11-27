const express = require("express");
const movies = require("../controllers/movies.controller");
const cinema = require("../controllers/cinema.controller");
const foods = require("../controllers/foods.controller");

const router = express.Router();

router.route("/").get(movies.findAll).post(movies.create);

router.route("/cinema").get(cinema.findAll).post(cinema.create);

router.route("/cinema/foods").get(foods.findAll).post(foods.create);

router.route("/cinema/foods/:id").get(foods.findOne).delete(foods.delete);

router
    .route("/cinema/:id")
    .get(cinema.findOne)
    .put(cinema.update)
    .delete(cinema.delete);

router
    .route("/:id")
    .get(movies.findOne)
    .put(movies.update)
    .delete(movies.delete);

module.exports = router;
