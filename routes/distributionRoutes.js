const express = require("express");
const router = express.Router();
const fairDistributionAlgorithm = require("../utils/fairDistributionAlgorithm");

// Route: GET /api/distribute-sites
// Description: Trigger the optimal distribution of sites algorithm
router.get("/", fairDistributionAlgorithm);

module.exports = router;
