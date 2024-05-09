const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use("/api", router);

const PORT = 9090 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
});
