import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc   Auth user & get token
// route   POST /api/users/auth
// access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.send(req.body);
});

// @desc   Register a new user
// route   POST /api/users/
// access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  res.send(req.body);
});

// @desc   Get user profile
// route   GET /api/users/profile
// access  Private - jwt required for access
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('User profile details will appear header...');
});

// @desc   Update user profile
// route   PUT /api/users/profile
// access  Private - jwt required for access
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Updating user profile...');
});

// @desc   Logout user
// route   POST /api/users/logout
// access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logging out...');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
}