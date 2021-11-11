const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /profile
// @desc Create user profile with valid token
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const body = req.body;

  if (!body.userId) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const user = await User.findById(body.userId);

  //create new profile
  if (user) {
    await Profile.create({
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

    res.send({ message: "Profile successfully created" });
  }
});

// @route GET /profle
// @desc Get user profile with valid token
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.query.id;

  if (!id) {
    res.status(400);
    throw new Error("Ivalid Profile Request");
  }
  const profile = await Profile.findOne({ userId: [id] });
  res.send(profile);
});

// @route Patch /profile
// @desc Edit user profile with valid token
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const id = req.query.id;
  const body = req.body;
  if (!id) {
    res.status(400);
    throw new Error("Ivalid Profile Edit Request");
  }
  const updated = await Profile.findOneAndUpdate({ userId: id }, body, {
    new: true,
  });
  res.send("Profile successfully updated");
});

// @route GET /profile/all
// @desc Get all user profiles with valid token
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({}, "-_id -__v");
  res.send(profiles);
});
