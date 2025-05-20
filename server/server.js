const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

require("./config/dbConfig"); // ensure this connects to MongoDB
const port = process.env.PORT; // process object

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
