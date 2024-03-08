const mongoose = require("mongoose");

const electricianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const Electrician = mongoose.model("Electrician", electricianSchema);

module.exports = Electrician;
