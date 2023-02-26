const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "backend/views");

app.use(express.static("public"));

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
const notFoundError = require("./middlewares/notFoundError");
const errorHandler = require("./middlewares/errorHandler");
const { usersModel } = require("./models/index");
const auth = require("./middlewares/auth");
const sendEmail = require("./services/sendEmail");
require("colors");

function generateToken(data) {
  const dataObj = { data };
  return (token = jwt.sign(dataObj, SECRET_KEY, { expiresIn: "3h" }));
}

app.post(
  "/register",
  asyncHandler(async (req, res) => {
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
  })
);

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

app.get(
  "/logout",
  asyncHandler(auth),
  asyncHandler(async (req, res) => {
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
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/send", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.render("send", {
      msg: "success",
      name: req.body.name,
      email: req.body.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.use("/api", locKyivRouter);
app.use("*", notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Vsevolodych on server on port: ${PORT}`.bold.green.italic);
});
