const express = require("express");
const regionController = require("../controllers/regionController");
const upload = require("../middlewares/addNewData");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

// const app = express();

const regionRouter = express.Router();

regionRouter.post("/region", regionController.add);
regionRouter.post(
  "/region/newData",
  upload.single("image"),
  regionController.addImageRegion
);
regionRouter.patch(
  "/region/newData/:id",
  asyncHandler(regionController.updateImageRegion)
);
regionRouter.get("/region/paginate", asyncHandler(regionController.getAll));
regionRouter.get("/region/:id", asyncHandler(regionController.getOne));
regionRouter.put("/region/:id", asyncHandler(regionController.update));
regionRouter.patch("/region/:id", asyncHandler(regionController.updateDetail));
regionRouter.delete("/region/:id", asyncHandler(regionController.remove));

module.exports = regionRouter;
