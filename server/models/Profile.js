const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Other"],
      message: "Invalid gender",
    },
  },
  isSitter: {
    type: Boolean,
    required: true,
    default: false,
  },
  hourlyRate: {
    type: Number,
  },
  availability: {
    monday: { type: Boolean, required: true, default: false },
    tuesday: { type: Boolean, required: true, default: false },
    wednesday: { type: Boolean, required: true, default: false },
    thursday: { type: Boolean, required: true, default: false },
    friday: { type: Boolean, required: true, default: false },
    saturday: { type: Boolean, required: true, default: false },
    sunday: { type: Boolean, required: true, default: false },
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
