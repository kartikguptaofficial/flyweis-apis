import express from "express";
import { catchAsync } from "../utils/catchAsync.util.js";
import {
  getAllCartItemsController,
  addItemToCartController,
} from "../controllers/cart.controller.js";
import checkAuthToken from "../middlewares/auth.middleware.js";
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

export default app;
