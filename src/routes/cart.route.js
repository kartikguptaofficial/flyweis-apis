const express = require("express");
const { catchAsync } = require("../utils/catchAsync.util.js");
const {
  getAllCartItemsController,
  addItemToCartController,
} = require("../controllers/cart.controller.js");
const checkAuthToken = require("../middlewares/auth.middleware.js");
const app = express();

app.get(
  "/items/:userId",
  checkAuthToken,
  catchAsync(getAllCartItemsController),
);
app.post(
  "/add-item/:userId",
  checkAuthToken,
  catchAsync(addItemToCartController),
);

module.exports = app;
