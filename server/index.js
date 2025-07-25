const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const documentRoutes = require("./routes/documentRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/extract", documentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
