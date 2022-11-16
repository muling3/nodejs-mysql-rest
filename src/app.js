const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config()

//json middleware
app.use(express.json());

//cors middleware
app.use(cors());

// register user routes
app.use("/users", require("./routes/usersRoutes"))

// register user routes
app.use("/products", require("./routes/productRoutes"))

// register user routes
app.use("/cart", require("./routes/cartRoutes"))

module.exports = app