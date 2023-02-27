const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const path = require("path");
const pathToEnv = path.join(__dirname, "..", "config", ".env");
const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config({ path: pathToEnv });
const { PORT } = process.env;
const SECRET_KEY = "macho";
const connectDb = require("../config/db");
const locKyivRouter = require("./routes/locKyiv");
const regionRouter = require("./routes/region");
const authRouter = require("./routes/authRouter");
const notFoundError = require("./middlewares/notFoundError");
const errorHandler = require("./middlewares/errorHandler");
const { usersModel } = require("./models/index");
require("colors");

function generateToken(data) {
  const dataObj = { data };
  return (token = jwt.sign(dataObj, SECRET_KEY, { expiresIn: "24h" }));
}

// app.post(
//   "/register",
//   asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res.status(400);
//       throw new Error("Provide all required fields");
//     }
//     const candidate = await usersModel.findOne({ email });

//     if (candidate) {
//       res.status(409);
//       throw new Error("This user already exists, please login");
//     }
//     const newUsers = new usersModel({ ...req.body });
//     newUsers.password = bcrypt.hashSync(password, 10);
//     const user = await newUsers.save();
//     if (!user) {
//       res.status(409);
//       throw new Error("Can't save user to the data base");
//     }
//     res.status(201).json({ code: 201, user, message: "Successful success" });
//   })
// );

app.post(
  "/login",
  asyncHandler(async (req, res) => {
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
  })
);

app.use("/", asyncHandler(authRouter));

app.use("/fishingLocs", locKyivRouter);

app.use("/", regionRouter);

app.use("*", notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Vsevolodych on server on port: ${PORT}`.bold.green.italic);
});
