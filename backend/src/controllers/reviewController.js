import asyncHandler from 'express-async-handler';
import Review from '../models/reviewModel.js';
import User from '../models/userModel.js';

// @desc   Get a review by name
// route   GET /api/reviews/:name
// access  Public
const getReview = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get review" });
});

// @desc   Create a review
// route   POST /api/reviews/:name
// access  Private
const createReview = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Create review" });
});

// @desc   Upvote a review
// route   PUT /api/reviews/:name/upvote
// access  Private
const upvoteReview = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Upvote review" });
});

export {
  getReview,
  createReview,
  upvoteReview,
}