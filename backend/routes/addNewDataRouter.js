const express = require("express");
const upload = require("../middlewares/addNewData");
const addNewDataController = require("../controllers/addNewDataController");

const addNewDataRouterKyiv = express.Router();

addNewDataRouterKyiv.post(
  "/newData/locKyiv",
  upload.single("image"),
  addNewDataController.addKyivData
);

addNewDataRouterKyiv.patch(
  "/newData/locKyiv/:id",
  addNewDataController.updateKyivData
);

module.exports = addNewDataRouterKyiv;
