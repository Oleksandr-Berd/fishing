const path = require("path");
const fs = require("fs/promises");
const { v4 } = require("uuid");

const KyivPictureDir = path.join(__dirname, "..", "public", "kyivLocPictures");

const picturesKyiv = [];

class addNewDataController {
  addKyivData = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(KyivPictureDir, originalname);
    const image = path.join("kyivLocPictures", originalname);
    try {
      await fs.rename(tempUpload, resultUpload);
      const newPicture = {
        name: req.body.name,
        id: v4(),
        image,
      };
      picturesKyiv.push(newPicture);
      res.status(201).json({ message: "Successful success" });
    } catch (error) {
      await fs.unlink(tempUpload);
      console.log(error.message);
    }
  };
  updateKyivData = async (req, res) => {};
}

module.exports = new addNewDataController();
