const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const path = require("path");
const fs = require("fs/promises");
const pathToEnv = path.join(__dirname, "..", "config", ".env");
const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");
dotenv.config({ path: pathToEnv });
const { PORT } = process.env;
const connectDb = require("../config/db");
const locKyivRouter = require("./routes/locKyiv");
const regionRouter = require("./routes/region");
const authRouter = require("./routes/authRouter");
const notFoundError = require("./middlewares/notFoundError");
const errorHandler = require("./middlewares/errorHandler");
require("colors");
let cors = require("cors");

const multer = require("multer");
const addNewDataRouterKyiv = require("./routes/addNewDataRouter");

app.use(cors({ origin: true }));

app.use(
  "/public/kyivLocPictures",
  express.static(path.join(__dirname, "/public/kyivLocPictures/"))
);

app.use("/", addNewDataRouterKyiv);

app.use("/", asyncHandler(authRouter));

app.use("/region", locKyivRouter);

app.use("/", regionRouter);

app.use("*", notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Vsevolodych on server on port: ${PORT}`.bold.green.italic);
});
