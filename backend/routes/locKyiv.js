const express = require("express");
const locKyivController = require("../controllers/locKyivController");
const asyncHandler = require("express-async-handler");

// const app = express();

const locKyivRouter = express.Router();

locKyivRouter.post(
  "/locKyiv",
  (req, res, next) => {
    console.log("validation worked");
    next();
  },
  locKyivController.add
);
locKyivRouter.get("/locKyiv", asyncHandler(locKyivController.getAll));
locKyivRouter.get("/locKyiv/:id", asyncHandler(locKyivController.getOne));
locKyivRouter.put("/locKyiv/:id", asyncHandler(locKyivController.update));
locKyivRouter.patch(
  "/locKyiv/:id",
  asyncHandler(locKyivController.updateDetail)
);
locKyivRouter.delete("/locKyiv/:id", asyncHandler(locKyivController.remove));

module.exports = locKyivRouter;
