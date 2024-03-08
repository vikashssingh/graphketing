const express = require("express");
const router = express.Router();
const electricianController = require("../controller/electricianController");

// Route: POST /api/electricians
// Description: Add a new electrician
router.post("/", electricianController.addElectrician);
router.get("/", electricianController.getAllElectricians);

module.exports = router;
