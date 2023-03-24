const path = require("path");
const fs = require("fs/promises");
const { v4 } = require("uuid");
const locationModel = require("../models/locationModel");

const KyivPictureDir = path.join(__dirname, "..", "public", "kyivLocPictures");

let picturesKyiv = [];

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
      picturesKyiv.push(newPicture.image);
      res.status(201).json({ message: "Successful success" });
    } catch (error) {
      await fs.unlink(tempUpload);
      console.log(error.message);
    }
  };
  updateKyivData = async (req, res) => {
    const { id } = req.params;
    const locKyiv = await locationModel.findByIdAndUpdate(id, {
      picture: picturesKyiv,
    });
    if (!locKyiv) {
      res.status(400);
      throw new Error("There is no location with this id");
    }

    res.status(200).json({
      code: 200,
      message: "Successful success",
      data: locKyiv,
    });
  };
}

module.exports = new addNewDataController();
