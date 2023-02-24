const mongoose = require("mongoose");

async function connectDb() {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(process.env.DB_URI);
    console.log(
      `Successful success with DB, name: ${db.connection.name} on port: ${db.connection.port}, on host: ${db.connection.host}`
        .bold.green.italic
    );
  } catch (error) {
    console.error(
      `There is some error occured: ${error.message}`.bold.red.italic
    );
  }
}

module.exports = connectDb;

// mongoose.connect("mongodb://127.0.0.1:27017/test");

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
