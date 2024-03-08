// const express = require("express");

// const mongoose = require("mongoose");
// const electricianRoutes = require("./routes/electricianRoutes");
// const siteRoutes = require("./routes/siteRoutes");
// const distributionRoutes = require("./routes/distributionRoutes");

// // Initialize Express app
// const app = express();

// // Connect to MongoDB database

// mongoose
//   .connect(
//     "mongodb+srv://oishik:Graphketingment@cluster0.7patyyd.mongodb.net/electrician_allocation_system",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {

//     console.log("Connected to MongoDB");

//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//     process.exit(1);
//   });

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/routes/electricianRoutes", electricianRoutes);
// app.use("/routes/siteRoutes", siteRoutes);
// app.use("/routes/distributionRoutes", distributionRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     status: "error",
//     message: "Internal server error",
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3028;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// app.get("/", (req, res) => {
//   res.send("Welcome to the Electrician Allocation System!");
// });

// module.exports = app;
const express = require("express");
const mongoose = require("mongoose");
const electricianRoutes = require("./routes/electricianRoutes");
const siteRoutes = require("./routes/siteRoutes");
const distributionRoutes = require("./routes/distributionRoutes");

// Initialize Express app
const app = express();

// Connect to MongoDB database
//"mongodb+srv://oishik:Graphketingment@cluster0.7patyyd.mongodb.net/electrician_allocation_system
// mongoose
//   .connect("mongodb://localhost:27017/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
mongoose.connect("mongodb://localhost:27017/Graphketing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/electrician", electricianRoutes);
app.use("/site", siteRoutes);
app.use("/distribution", distributionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

// Start the server
const PORT = process.env.PORT || 3028;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Electrician Allocation System!");
});

module.exports = app;
