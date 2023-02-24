const { model, Schema } = require("mongoose");

const schemaUser = Schema({
  name: {
    type: String,
    default: "Vsevolodych",
  },
  email: {
    type: String,
    required: [true, "Auth: email is required"],
  },
  password: {
    type: String,
    required: [true, "Auth: password is required"],
  },
  token: {
    type: String,
    default: null,
  },
});

module.exports = model("users", schemaUser);
