import express from "express";
import AuthRoutes from "./auth.route.js";
import ProductRoutes from "./product.route.js";
import CartRoutes from "./cart.route.js";

const app = express();

app.use("/auth", AuthRoutes);
app.use("/product", ProductRoutes);
app.use("/cart", CartRoutes);

export default app;
