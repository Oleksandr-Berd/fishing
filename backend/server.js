const app = require("./app");

const path = require("path");

const pathToEnv = path.join(__dirname, "..", "config", ".env");
const dotenv = require("dotenv");
dotenv.config({ path: pathToEnv });
const { PORT } = process.env;
const connectDb = require("../config/db");

require("colors");

app.listen(PORT, () => {
  connectDb();
  console.log(`Vsevolodych on server on port: ${PORT}`.bold.green.italic);
});
