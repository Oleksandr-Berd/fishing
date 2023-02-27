const { usersModel } = require("../models/index");
const { isValidObjectId } = require("mongoose");
const bcrypt = require("bcrypt");

class authController {
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

  login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Provide all required fields");
    }

    const user = await usersModel.findOne({ email });
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!user || !isPasswordCorrect) {
      res.status(401);
      throw new Error("Invalid email or password");
    }
    user.token = generateToken(user._id);
    const savedUser = await user.save();
    if (!savedUser) {
      res.status(400);
      throw new Error("Can't save to DB");
    }
    res.status(201).json({
      code: 200,
      data: {
        email: user.email,
        token: user.token,
      },
    });
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
