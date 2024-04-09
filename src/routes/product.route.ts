import express from "express";
import { addProductController, getAllProductsContoller } from "../controllers/product.controller";
import { catchAsync } from "../utils/catchAsync.util";
import checkAuthToken from "../middlewares/auth.middleware";
const app = express();

app.get("/", checkAuthToken, catchAsync(getAllProductsContoller));
app.post("/", catchAsync(addProductController));

export default app;