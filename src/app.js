const express = require("express");
const cors = require("cors");

const bfhlRoutes = require("./routes/bfhl.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

app.use((err, req, res, next) => {
  return res.status(500).json({
    is_success: false,
    message: "Internal Server Error"
  });
});

module.exports = app;
