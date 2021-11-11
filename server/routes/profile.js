const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  getProfile,
  updateProfile,
  getAllProfiles,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);

router.route("/").get(protect, getProfile);

router.route("/").patch(protect, updateProfile);

router.route("/all").get(protect, getAllProfiles);

module.exports = router;
