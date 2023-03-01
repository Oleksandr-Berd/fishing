const path = require("path");
const fs = require("fs/promises");

const commonPictureDir = path.join(__dirname, "..", "public", "commonPictures");
class addNewDataController {
  addCommonData = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(commonPictureDir, originalname);

    try {
      await fs.rename(tempUpload, resultUpload);
      res.status(200).json({ message: "Successful success" });
    } catch (error) {
      //   await fs.unlink(tempUpload);
    }
  };
}

module.exports = new addNewDataController();
