import express from "express";
import { addProductController, getAllProductsContoller } from "../controllers/product.controller";
import { catchAsync } from "../utils/catchAsync.util";
const app = express();

app.get("/", catchAsync(getAllProductsContoller));
app.post("/", catchAsync(addProductController));

export default app;