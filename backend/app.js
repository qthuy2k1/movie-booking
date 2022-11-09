const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const moviesRouter = require("./app/routes/movies.route");
const ordersRouter = require("./app/routes/orders.router");
const ApiError = require("./app/api-error");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.use("/api/movies", moviesRouter);
app.use("/api/orders", ordersRouter);
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Server is OK" });
});

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
