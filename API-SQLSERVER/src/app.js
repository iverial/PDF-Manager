const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const pdfRoutes = require("./routes/pdf.routes");
const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


app.use("/api", pdfRoutes);

module.exports = app;
