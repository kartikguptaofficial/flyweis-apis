const express = require("express");
const AuthRoutes = require("./auth.route.js");
const ProductRoutes = require("./product.route.js");
const CartRoutes = require("./cart.route.js");

const app = express();

app.use("/auth", AuthRoutes);
app.use("/product", ProductRoutes);
app.use("/cart", CartRoutes);

module.exports = app;
