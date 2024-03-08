const express = require("express");
const router = express.Router();
const siteController = require("../controller/siteController"); // Corrected import path

// Route: POST /api/sites
// Description: Add a new work site
router.post("/", siteController.addSite);

// Route: GET /api/sites
// Description: Get all work sites
router.get("/", siteController.getAllSites);

// Route: GET /api/sites/:id
// Description: Get work site by ID
router.get("/:id", siteController.getSiteById);

// Route: PUT /api/sites/:id
// Description: Update work site details
router.put("/:id", siteController.updateSite);

// Route: DELETE /api/sites/:id
// Description: Delete work site by ID
router.delete("/:id", siteController.deleteSite);

module.exports = router;
