const Electrician = require("../models/electricianModel");

// Controller function to add a new electrician
exports.addElectrician = async (req, res) => {
  try {
    // Extract data from request body
    const { name, status } = req.body;

    // Create a new electrician instance
    const newElectrician = await Electrician.create({
      name,
      status,
    });

    // Send success response
    res.status(201).json({
      status: "success",
      data: {
        electrician: newElectrician,
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

// Controller function to get all electricians
exports.getAllElectricians = async (req, res) => {
  try {
    // Fetch all electricians from the database
    const electricians = await Electrician.find();

    // Send success response
    res.status(200).json({
      status: "success",
      data: {
        electricians,
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

// Controller function to get an electrician by ID
exports.getElectricianById = async (req, res) => {
  try {
    // Extract electrician ID from request parameters
    const { id } = req.params;

    // Find the electrician by ID
    const electrician = await Electrician.findById(id);

    // Check if the electrician exists
    if (!electrician) {
      return res.status(404).json({
        status: "fail",
        message: "Electrician not found",
      });
    }

    // Send success response
    res.status(200).json({
      status: "success",
      data: {
        electrician,
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

// Controller function to update electrician details
exports.updateElectrician = async (req, res) => {
  try {
    // Extract electrician ID from request parameters
    const { id } = req.params;

    // Find the electrician by ID and update its details
    const updatedElectrician = await Electrician.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    // Check if the electrician was updated successfully
    if (!updatedElectrician) {
      return res.status(404).json({
        status: "fail",
        message: "Electrician not found",
      });
    }

    // Send success response
    res.status(200).json({
      status: "success",
      data: {
        electrician: updatedElectrician,
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

// Controller function to delete an electrician by ID
exports.deleteElectrician = async (req, res) => {
  try {
    // Extract electrician ID from request parameters
    const { id } = req.params;

    // Find the electrician by ID and delete it
    const deletedElectrician = await Electrician.findByIdAndDelete(id);

    // Check if the electrician was deleted successfully
    if (!deletedElectrician) {
      return res.status(404).json({
        status: "fail",
        message: "Electrician not found",
      });
    }

    // Send success response
    res.status(204).json({
      status: "success",
      message: "Electrician deleted successfully",
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
