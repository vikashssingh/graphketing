// siteController.js

// Import necessary models
const Site = require("../models/siteModel");

// Controller function to add a new work site
exports.addSite = async (req, res) => {
  try {
    // Extract data from request body
    const {
      date,
      status,
      assigned_electrician_id,
      other_relevant_information,
    } = req.body;

    // Create a new site instance
    const newSite = await Site.create({
      date,
      status,
      assigned_electrician_id,
      other_relevant_information,
    });

    // Send success response
    res.status(201).json({
      status: "success",
      data: {
        site: newSite,
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

// Controller function to get all work sites
exports.getAllSites = async (req, res) => {
  try {
    // Fetch all sites from the database
    const sites = await Site.findAll();

    // Send success response
    res.status(200).json({
      status: "success",
      data: {
        sites,
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

// Controller function to get a work site by ID
exports.getSiteById = async (req, res) => {
  try {
    // Extract site ID from request parameters
    const { id } = req.params;

    // Find the site by ID
    const site = await Site.findByPk(id);

    // Check if the site exists
    if (!site) {
      return res.status(404).json({
        status: "fail",
        message: "Site not found",
      });
    }

    // Send success response
    res.status(200).json({
      status: "success",
      data: {
        site,
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

// Controller function to update work site details
exports.updateSite = async (req, res) => {
  try {
    // Extract site ID from request parameters
    const { id } = req.params;

    // Find the site by ID and update its details
    const [updatedRowsCount] = await Site.update(req.body, {
      where: { id },
    });

    // Check if the site was updated successfully
    if (updatedRowsCount === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Site not found",
      });
    }

    // Send success response
    res.status(200).json({
      status: "success",
      message: "Site updated successfully",
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

// Controller function to delete a work site by ID
exports.deleteSite = async (req, res) => {
  try {
    // Extract site ID from request parameters
    const { id } = req.params;

    // Find the site by ID and delete it
    const deletedRowCount = await Site.destroy({
      where: { id },
    });

    // Check if the site was deleted successfully
    if (deletedRowCount === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Site not found",
      });
    }

    // Send success response
    res.status(204).json({
      status: "success",
      message: "Site deleted successfully",
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
