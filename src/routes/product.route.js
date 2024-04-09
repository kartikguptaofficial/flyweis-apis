import express from "express";
import {
  addProductController,
  getAllProductsContoller,
} from "../controllers/product.controller.js";
import { catchAsync } from "../utils/catchAsync.util.js";
import checkAuthToken from "../middlewares/auth.middleware.js";
const app = express();

app.get("/", checkAuthToken, catchAsync(getAllProductsContoller));
app.post("/", catchAsync(addProductController));

export default app;
