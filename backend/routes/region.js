const express = require("express");
const regionController = require("../controllers/regionController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

// const app = express();

const regionRouter = express.Router();

regionRouter.post("/region", auth, regionController.add);
regionRouter.get("/region", auth, asyncHandler(regionController.getAll));
regionRouter.get("/region/:id", auth, asyncHandler(regionController.getOne));
regionRouter.put("/region/:id", auth, asyncHandler(regionController.update));
regionRouter.patch(
  "/region/:id",
  auth,
  asyncHandler(regionController.auth, updateDetail)
);
regionRouter.delete("/region/:id", auth, asyncHandler(regionController.remove));

module.exports = regionRouter;
