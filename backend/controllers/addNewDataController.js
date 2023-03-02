const path = require("path");
const fs = require("fs/promises");

const commonPictureDir = path.join(
  __dirname,
  "..",
  "public",
  "kyivLocPictures"
);
class addNewDataController {
  addKyivData = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(commonPictureDir, originalname);

    try {
      await fs.rename(tempUpload, resultUpload);
      res.status(200).json({ message: "Successful success" });
    } catch (error) {
      await fs.unlink(tempUpload);
      console.log(error.message);
    }
  };
}

module.exports = new addNewDataController();
