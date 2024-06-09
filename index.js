const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const router = require("./routes/routes");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "https://eclick-ecommerce.web.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("E-click Server is running..");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
});
