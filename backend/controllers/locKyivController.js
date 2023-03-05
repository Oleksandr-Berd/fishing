const locKyivModel = require("../models/locKyivModel");
const { isValidObjectId } = require("mongoose");

class LocKyivController {
  add = async (req, res) => {
    const {
      title,
      // coordinates,
      // adress,
      fishes,
      // fishing_conditions,
      // description,
      // allowed_time,
    } = req.body;

    if (!title || !fishes) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }
    const locKyiv = await locKyivModel.create({ ...req.body });

    if (!locKyiv) {
      res.status(400);
      throw new Error("Unable to save in a data base");
    }
    res
      .status(201)
      .json({ code: 201, message: "Successful success", data: locKyiv });
  };

  getAll = async (req, res) => {
    const locsKyiv = await locKyivModel.find({});
    if (!locsKyiv) {
      res.status(400);
      throw new Error("Unable to fetch the data");
    }
    res.status(201).json({
      code: 200,
      message: "Successful success",
      data: locsKyiv,
      quantity: locsKyiv.length,
    });
  };

  getOne = async (req, res) => {
    const { id } = req.params;
    const validId = isValidObjectId(id);
    if (!validId) {
      res.status(400);
      throw new Error("Invalid id");
    }
    const locKyiv = await locKyivModel.findById(id);
    if (!locKyiv) {
      res.status(400);
      throw new Error("There is no location with this id");
    }
    res.status(200).json({
      code: 200,
      message: "Successful success",
      data: locKyiv,
    });
  };

  update = async (req, res) => {
    const { id } = req.params;

    const locKyiv = await locKyivModel.findByIdAndUpdate(id, req.body);
    if (!locKyiv) {
      res.status(400);
      throw new Error("There is no location with this id");
    }
    res.status(200).json({
      code: 200,
      message: "Successful success",
      data: locKyiv,
    });
  };

  updateDetail = async (req, res) => {
    const { id } = req.params;

    const locKyiv = await locKyivModel.findByIdAndUpdate(id, req.body);
    if (!locKyiv) {
      res.status(400);
      throw new Error("There is no location with this id");
    }
    res.status(200).json({
      code: 200,
      message: "Successful success",
      data: locKyiv,
    });
  };

  remove = async (req, res) => {
    const { id } = req.params;
    const locKyiv = await locKyivModel.findByIdAndDelete(id);
    if (!locKyiv) {
      res.status(400);
      throw new Error("There is no location with this id");
    }
    res.status(200).json({
      code: 200,
      message: "Successful success",
      data: locKyiv,
    });
  };
}

module.exports = new LocKyivController();
