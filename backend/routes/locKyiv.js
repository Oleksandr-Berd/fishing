const express = require("express");
const locController = require("../controllers/locationController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

const locKyivRouter = express.Router();

locKyivRouter.post("/locKyiv", locController.add);
locKyivRouter.get("/paginate/locKyiv", asyncHandler(locController.getAll));
locKyivRouter.get("/locKyiv/:id", asyncHandler(locController.getOne));
locKyivRouter.put("/locKyiv/:id", asyncHandler(locController.update));
locKyivRouter.patch("/locKyiv/:id", asyncHandler(locController.updateDetail));
locKyivRouter.delete("/locKyiv/:id", asyncHandler(locController.remove));

module.exports = locKyivRouter;
