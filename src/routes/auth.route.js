const express = require("express");
const { catchAsync } = require("../utils/catchAsync.util.js");
const {
  getOrCreateUserController,
  sendAuthOTPController,
  verifyAuthOTPController,
} = require("../controllers/auth.controller.js");
const app = express();

app.post("/login", catchAsync(getOrCreateUserController));
app.post("/register", catchAsync(getOrCreateUserController));
app.post("/register-mobile", catchAsync(sendAuthOTPController));
app.post("/verify-mobile", catchAsync(verifyAuthOTPController));

module.exports = app;
