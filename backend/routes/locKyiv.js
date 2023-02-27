const express = require("express");
const locKyivController = require("../controllers/locKyivController");
const auth = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

// const app = express();

const locKyivRouter = express.Router();

locKyivRouter.post("/locKyiv", auth, locKyivController.add);
locKyivRouter.get("/locKyiv", auth, asyncHandler(locKyivController.getAll));
locKyivRouter.get("/locKyiv/:id", auth, asyncHandler(locKyivController.getOne));
locKyivRouter.put("/locKyiv/:id", auth, asyncHandler(locKyivController.update));
locKyivRouter.patch(
  "/locKyiv/:id",
  auth,
  asyncHandler(locKyivController.updateDetail)
);
locKyivRouter.delete(
  "/locKyiv/:id",
  auth,
  asyncHandler(locKyivController.remove)
);

module.exports = locKyivRouter;
