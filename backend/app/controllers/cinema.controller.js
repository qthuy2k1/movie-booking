const Cinema = require("../models/cinema.model");

exports.create = async (req, res) => {
    const newCinema = new Cinema(req.body);
    await newCinema.save();
    return res.status(201).json(newCinema);
};

exports.findAll = async (req, res) => {
    const cinema = await Cinema.find({}).populate("Foods");
    return res.status(200).json(cinema);
};

exports.findOne = async (req, res) => {
    const cinema = await Cinema.findById(req.params.id);
    return res.status(200).json(cinema);
};

exports.updateSeatList = async (req, res) => {
    const cinema = await Cinema.findById(req.params.id);

    cinema.ShowTimes.id(req.body.id).SeatList.forEach((s) => {
        req.body.SeatNumber.forEach((e) => {
            if (s.SeatName == e.charAt(0)) {
                s.SeatNumber[parseInt(e.charAt(1)) - 1].Status =
                    req.body.Status;
            }
        });
    });

    await cinema.save();

    return res.status(201).json(cinema);
};

exports.update = async (req, res) => {
    const cinemaID = req.params.id;
    const newCinema = req.body;
    const result = await Cinema.findByIdAndUpdate(cinemaID, newCinema);

    return res.status(200).json({ success: true });
};

exports.delete = async (req, res) => {
    const cinemaID = req.params.id;
    const cinema = await Cinema.findById(cinemaID);

    await cinema.remove();

    return res.status(200).json({ success: true });
};
