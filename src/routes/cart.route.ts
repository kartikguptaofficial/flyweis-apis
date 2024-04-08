import express from "express";
import { catchAsync } from "../utils/catchAsync.util";
import { getAllCartItemsController, addItemToCartController } from "../controllers/cart.controller"
const app = express();

app.get("/items/:userId", catchAsync(getAllCartItemsController));
app.post("/add-item/:userId", catchAsync(addItemToCartController));

export default app;