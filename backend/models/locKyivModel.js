const { model, Schema } = require("mongoose");

const schemaLocKyiv = Schema({
  title: {
    type: String,
    required: [true, "DB: title is required"],
  },
  picture: String,
  coordinates: Number,
  adress: String,
  fishes: {
    type: String,
    required: [true, "DB: there should be some fishes"],
  },
  fishing_conditions: String,
  allowed_time: Number,
});

module.exports = model("locKyiv", schemaLocKyiv);
