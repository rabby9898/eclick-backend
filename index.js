const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const router = require("./routes/routes");
require("dotenv").config();

const app = express();

// Configure CORS
// Configure CORS
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5000",
  "https://eclick-ecommerce.web.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
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
