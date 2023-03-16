const express = require("express");
const locKyivController = require("../controllers/locKyivController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

// const app = express();

const locKyivRouter = express.Router();

locKyivRouter.post("/locKyiv", locKyivController.add);
locKyivRouter.get("/paginate/locKyiv", asyncHandler(locKyivController.getAll));
locKyivRouter.get("/locKyiv/:id", asyncHandler(locKyivController.getOne));
locKyivRouter.put("/locKyiv/:id", asyncHandler(locKyivController.update));
locKyivRouter.patch(
  "/locKyiv/:id",
  asyncHandler(locKyivController.updateDetail)
);
locKyivRouter.delete("/locKyiv/:id", asyncHandler(locKyivController.remove));

module.exports = locKyivRouter;
