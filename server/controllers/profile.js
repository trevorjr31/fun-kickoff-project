const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /profile
// @desc Create user profile with valid token
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const body = req.body;
  const id = body.userId;
  if (!id) {
    res.status(401);
    throw new Error("Not Authorized!!!!!");
  }

  const existingProfile = await Profile.findOne({ userId: id });
  if (existingProfile) {
    res.status(400);
    throw new Error("Profile already exists");
  }

  //create new profile
  const profile = await Profile.create({
    userId: user._id,
    firstName: body.firstName,
    lastName: body.lastName,
    description: body.description,
    profilePic: body.profilePic,
    dateOfBirth: body.dateOfBirth,
    phone: body.phone,
    address: body.address,
    location: body.location,
    gender: body.gender,
    isSitter: body.isSitter,
    hourlyRate: body.hourlyRate,
    availability: body.availability,
  });
  if (!profile) {
    res.status(500);
    throw new Error("Bad request");
  }
  res
    .status(200)
    .send({ message: "Profile successfully created", data: profile });
});

// @route GET /profle
// @desc Get user profile with valid token
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error("Bad Request");
  }
  const profile = await Profile.findOne({ userId: [id] });
  if (!profile) {
    res.status(404);
    throw new Error("No profile exists");
  }
  res.send(profile);
});

// @route Patch /profile
// @desc Edit user profile with valid token
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  if (!id) {
    res.status(400);
    throw new Error("Bad Request");
  }
  if (id !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }
  const updated = await Profile.findOneAndUpdate({ userId: id }, body, {
    new: true,
  });
  res
    .status(200)
    .send({ message: "Profile successfully updated", data: updated });
});

// @route GET /profile/all
// @desc Get all user profiles with valid token
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({}, "-_id -__v");
  res.send(profiles);
});
