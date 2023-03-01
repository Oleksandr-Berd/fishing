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

app.use(cors());

const tempDir = path.join(__dirname, "temp");
const commonPictureDir = path.join(__dirname, "public", "commonPictures");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

app.post("/newData", upload.single("image"), async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(commonPictureDir, originalname);

  try {
    await fs.rename(tempUpload, resultUpload);
    res.status(200).json({ message: "Successful success" });
  } catch (error) {
    await fs.unlink(tempUpload);
  }
});

app.use("/", asyncHandler(authRouter));

app.use("/region", locKyivRouter);

app.use("/", regionRouter);

app.use("*", notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Vsevolodych on server on port: ${PORT}`.bold.green.italic);
});
