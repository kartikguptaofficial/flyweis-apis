import express from "express";
import { catchAsync } from "../utils/catchAsync.util";
import { getAllCartItemsController, addItemToCartController } from "../controllers/cart.controller";
import checkAuthToken from "../middlewares/auth.middleware";
const app = express();

app.get("/items/:userId", checkAuthToken, catchAsync(getAllCartItemsController));
app.post("/add-item/:userId", checkAuthToken, catchAsync(addItemToCartController));

export default app;