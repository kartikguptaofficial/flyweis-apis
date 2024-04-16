const express = require("express");
const {
  addProductController,
  getAllProductsContoller,
} = require("../controllers/product.controller.js");
const { catchAsync } = require("../utils/catchAsync.util.js");
const checkAuthToken = require("../middlewares/auth.middleware.js");
const app = express();

app.get("/", checkAuthToken, catchAsync(getAllProductsContoller));
app.post("/", catchAsync(addProductController));

module.exports = app;
