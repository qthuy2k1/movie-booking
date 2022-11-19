const express = require("express");
const movies = require("../controllers/movies.controller");
const cinema = require("../controllers/cinema.controller");
const foods = require("../controllers/foods.controller");
// const showtimes = require("../controllers/showtimes.controller");
// const seatlist = require("../controllers/seatlist.controller");
// const seatnumber = require("../controllers/seatnumber.controller");

const router = express.Router();

router.route("/").get(movies.findAll).post(movies.create);

router.route("/cinema").get(cinema.findAll).post(cinema.create);

// router.route("/cinema/foods").get(foods.findAll).post(foods.create);

// // router.route("/cinema/showtimes").get(showtimes.findAll).post(showtimes.create);

// // router
// //     .route("/cinema/showtimes/seatlist")
// //     .get(seatlist.findAll)
// //     .post(seatlist.create);
// // router
// //     .route("/cinema/showtimes/seatlist/seatnumber")
// //     .get(seatnumber.findAll)
// //     .post(seatnumber.create);

// router.route("/cinema/foods/:id").get(foods.findOne);
// // router.route("/cinema/showtimes/:id").get(showtimes.findOne);

// router.route("/cinema/:id").get(cinema.findOne);

router
    .route("/:id")
    .get(movies.findOne)
    .put(movies.update)
    .delete(movies.delete);

router.route("/:id/seatlist").put(cinema.updateSeatList);

module.exports = router;
