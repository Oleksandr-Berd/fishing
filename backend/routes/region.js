const express = require("express");
const regionController = require("../controllers/regionController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

// const app = express();

const regionRouter = express.Router();

regionRouter.post("/region", regionController.add);
regionRouter.get("/region", asyncHandler(regionController.getAll));
regionRouter.get("/region/:id", asyncHandler(regionController.getOne));
regionRouter.put("/region/:id", asyncHandler(regionController.update));
regionRouter.patch("/region/:id", asyncHandler(regionController.updateDetail));
regionRouter.delete("/region/:id", asyncHandler(regionController.remove));

module.exports = regionRouter;
