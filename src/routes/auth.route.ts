import express from "express";
import { catchAsync } from "../utils/catchAsync.util";
import { getOrCreateUserController, sendAuthOTPController, verifyAuthOTPController } from "../controllers/auth.controller";
const app = express();

app.post("/login", catchAsync(getOrCreateUserController));
app.post("/register", catchAsync(getOrCreateUserController));
app.post("/register-mobile", catchAsync(sendAuthOTPController));
app.post("/verify-mobile", catchAsync(verifyAuthOTPController));

export default app;