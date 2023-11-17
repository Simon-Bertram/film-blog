import asyncHandler from 'express-async-handler';
import Review from '../models/reviewModel.js';
import User from '../models/userModel.js';

// @desc   Get a review by name
// route   GET /api/reviews/:name
// access  Public
const getReview = asyncHandler(async (req, res) => {
  const { name } = req.params;
  const review = await Review.findOne({ name });

  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404);
    throw new Error("Review not found");
  }
});

// @desc   Create a review
// route   POST /api/reviews/:name
// access  Private
const createReview = asyncHandler(async (req, res) => {
  const { name, title, rating, tags, content } = req.body;
  const urlName = title.split(" ").join("-").toLowerCase().trim();
  const review = await Review.create({
    name: urlName,
    title,
    rating,
    tags,
    content,
  });
  if (review) {
    res.status(201).json(review);
  } else {
    res.status(400).send("Invalid review data");
  }
});

// @desc   Upvote a review
// route   PUT /api/reviews/:name/upvote
// access  Private
const upvoteReview = asyncHandler(async (req, res) => {
  try {
    const { name } = req.params;
    const review = await Review.findOne({ name });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Get the user's ID from the request
    const userId = req.user._id;
    if (!userId) {
      return res.status(401).json({ message: "You must be logged in to upvote a review" });
    }

    // Check if the user has already upvoted this review
    if (review.upvotes.includes(userId)) {
      return res.status(400).json({ message: "You've already upvoted this review" });
    }

    // Add the user's ID to the upvotes array
    review.upvotes.push(userId);

    // Save the updated review
    await review.save();

    res.status(200).json({ message: `The ${name} review now has ${review.upvotes.length} upvotes!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export {
  getReview,
  createReview,
  upvoteReview,
}