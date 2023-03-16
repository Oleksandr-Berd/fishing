const locKyivModel = require("../models/locKyivModel");
const { isValidObjectId } = require("mongoose");

class LocKyivController {
  add = async (req, res) => {
    const {
      title,

      fishes,
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
    const locKyiv = await locKyivModel.find({});
    if (!locKyiv) {
      res.status(400);
      throw new Error("Unable to fetch the data");
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < locKyiv.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = locKyiv.slice(startIndex, endIndex);
    res.paginatedResults = results;
    res.status(201).json({
      code: 200,
      message: "Successful success",
      data: results,
      quantity: locKyiv.length,
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
