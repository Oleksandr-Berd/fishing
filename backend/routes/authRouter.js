const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

const authRouter = express.Router();

// locKyivRouter.post("/locKyiv", auth, locKyivController.add);
// locKyivRouter.get("/locKyiv", auth, asyncHandler(locKyivController.getAll));
// locKyivRouter.get("/locKyiv/:id", auth, asyncHandler(locKyivController.getOne));
// locKyivRouter.put("/locKyiv/:id", auth, asyncHandler(locKyivController.update));
// locKyivRouter.patch(
//   "/locKyiv/:id",
//   auth,
//   asyncHandler(locKyivController.updateDetail)
// );
authRouter.get("/logout", auth, asyncHandler(authController.logout));

module.exports = authRouter;
