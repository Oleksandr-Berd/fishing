const { model, Schema } = require("mongoose");

const schemaLocKyiv = Schema({
  title: {
    type: String,
    required: [true, "DB: title is required"],
  },
  picture: Array,
  coordinates: Object,
  adress: String,
  fishes: {
    type: Array,
    required: [true, "DB: there should be some fishes"],
  },
  fishing_conditions: String,
  description: String,
  allowed_time: String,
});

module.exports = model("locKyiv", schemaLocKyiv);
