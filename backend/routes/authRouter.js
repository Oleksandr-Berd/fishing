const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

const authRouter = express.Router();

authRouter.post("/register", asyncHandler(authController.register));
authRouter.post("/login", asyncHandler(authController.login));
authRouter.get("/logout", auth, asyncHandler(authController.logout));

module.exports = authRouter;
