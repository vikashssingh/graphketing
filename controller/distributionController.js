// Import necessary models and libraries
const Electrician = require("../models/electricianModel");
const Site = require("../models/siteModel");
const distributeSites = require("../utils/fairDistributionAlgorithm");

// Controller function to trigger the optimal distribution of sites algorithm
exports.triggerDistribution = async (req, res) => {
  try {
    // Fetch all active electricians and sites from the database
    const electricians = await Electrician.find({ active: true });
    const sites = await Site.find({});

    // Check if there are electricians and sites available
    if (!electricians.length || !sites.length) {
      return res.status(400).json({
        status: "fail",
        message: "No active electricians or sites available for distribution",
      });
    }

    // Trigger the fair distribution algorithm
    const distributedElectricians = distributeSites(electricians, sites);

    // Optionally, you can save the updated electricians' data to the database

    // Send success response with the distributed electricians
    res.status(200).json({
      status: "success",
      data: {
        electricians: distributedElectricians,
      },
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
