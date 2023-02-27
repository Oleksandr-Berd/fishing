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
let cors = require("cors");
app.use(cors());
function generateToken(data) {
  const dataObj = { data };
  return (token = jwt.sign(dataObj, SECRET_KEY, { expiresIn: "24h" }));
}

app.use("/", asyncHandler(authRouter));

app.use("/regions", locKyivRouter);

app.use("/", regionRouter);

app.use("*", notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Vsevolodych on server on port: ${PORT}`.bold.green.italic);
});
