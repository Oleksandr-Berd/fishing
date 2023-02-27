const { model, Schema } = require("mongoose");

const schemaRegion = Schema({
  name: {
    type: String,
    required: [true, "DB: name is required"],
  },
});

module.exports = model("region", schemaRegion);