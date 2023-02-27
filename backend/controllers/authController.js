const { usersModel } = require("../models/index");
const { isValidObjectId } = require("mongoose");
const bcrypt = require("bcrypt");

class authController {
  //   add = async (req, res) => {
  //     const { name } = req.body;

  //     if (!name) {
  //       res.status(400);
  //       throw new Error("Please provide all required fields");
  //     }
  //     const region = await regionModel.create({ ...req.body });

  //     if (!region) {
  //       res.status(400);
  //       throw new Error("Unable to save in a data base");
  //     }
  //     res
  //       .status(201)
  //       .json({ code: 201, message: "Successful success", data: region });
  //   };

  //   getAll = async (req, res) => {
  //     const region = await regionModel.find({});
  //     if (!region) {
  //       res.status(400);
  //       throw new Error("Unable to fetch the data");
  //     }
  //     res.status(201).json({
  //       code: 200,
  //       message: "Successful success",
  //       data: region,
  //       quantity: region.length,
  //     });
  //   };

  //   getOne = async (req, res) => {
  //     const { id } = req.params;
  //     const validId = isValidObjectId(id);
  //     if (!validId) {
  //       res.status(400);
  //       throw new Error("Invalid id");
  //     }
  //     const region = await regionModel.findById(id);
  //     if (!region) {
  //       res.status(400);
  //       throw new Error("There is no location with this id");
  //     }
  //     res.status(200).json({
  //       code: 200,
  //       message: "Successful success",
  //       data: region,
  //     });
  //   };

  //   update = async (req, res) => {
  //     const { id } = req.params;

  //     const region = await regionModel.findByIdAndUpdate(id, req.body);
  //     if (!region) {
  //       res.status(400);
  //       throw new Error("There is no location with this id");
  //     }
  //     res.status(200).json({
  //       code: 200,
  //       message: "Successful success",
  //       data: region,
  //     });
  //   };

  //   updateDetail = async (req, res) => {
  //     const { id } = req.params;

  //     const region = await regionModel.findByIdAndUpdate(id, req.body);
  //     if (!region) {
  //       res.status(400);
  //       throw new Error("There is no location with this id");
  //     }
  //     res.status(200).json({
  //       code: 200,
  //       message: "Successful success",
  //       data: region,
  //     });
  //   };

  register = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("Provide all required fields");
    }
    const candidate = await usersModel.findOne({ email });

    if (candidate) {
      res.status(409);
      throw new Error("This user already exists, please login");
    }
    const newUsers = new usersModel({ ...req.body });
    newUsers.password = bcrypt.hashSync(password, 10);
    const user = await newUsers.save();
    if (!user) {
      res.status(409);
      throw new Error("Can't save user to the data base");
    }
    res.status(201).json({ code: 201, user, message: "Successful success" });
  };

  logout = async (req, res) => {
    const id = req.user;
    const user = await usersModel.findById(id);
    console.log(id);
    user.token = null;
    const savedUser = await user.save();
    if (!savedUser) {
      res.status(400);
      throw new Error("Something goes wrong");
    }
    res.status(200).json({ message: "Logout successful" });
  };
}

module.exports = new authController();
