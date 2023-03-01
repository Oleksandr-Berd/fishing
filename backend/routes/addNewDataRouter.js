const express = require("express");
const upload = require("../middlewares/addNewData");
const addNewDataController = require("../controllers/addNewDataController");

const addNewDataRouter = express.Router();

addNewDataRouter.post(
  "/newData/common",
  upload.single("image"),
  addNewDataController.addCommonData
);

module.exports = addNewDataRouter;
