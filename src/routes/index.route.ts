import express from "express";
import AuthRoutes from "./auth.route";
import ProductRoutes from "./product.route";
import CartRoutes from "./cart.route";

const app = express();

app.use("/auth", AuthRoutes);
app.use("/product", ProductRoutes);
app.use("/cart", CartRoutes);

export default app;