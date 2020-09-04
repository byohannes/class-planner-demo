const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/classes", require("./routes/classes"));
app.use("/api/v1/bookings", require("./routes/bookings"));
app.use("/api/v1/courses", require("./routes/courseCalendar"));
app.use("/api/v1/class/bookings", require("./routes/classBookings"));



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
