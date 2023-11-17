import asyncHandler from 'express-async-handler';
import Review from '../models/reviewModel.js';
import User from '../models/userModel.js';
import Comment from '../models/commentModel.js';

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

// @desc   Add a comment
// route   POST /api/reviews/:name/addComment
// access  Public
const addComment = asyncHandler(async (req, res) => {
  res.send('TODO - Add comment');
});

// @desc   Upvote a comment
// route   POST /api/reviews/:commentId/upvote
// access  Private
const upvoteComment = asyncHandler(async (req, res) => {
  const { comment_id } = req.params;

  // Find the comment by its id
  const comment = await Comment.findById(comment_id);

  if (comment) {
    // Check if the user has already upvoted the comment
    const alreadyUpvoted = comment.upvotes.includes(req.user._id);

    if (alreadyUpvoted) {
      res.status(400);
      throw new Error('You have already upvoted this comment');
    } else {
      // Add the user's id to the upvotes array
      comment.upvotes.push({ user: req.user._id });
      await comment.save();
      res.status(200).json({
        message: 'Upvote successful!',
        upvotes: comment.upvotes.length,
      });
    }
  } else {
    res.status(404).send('Comment not found');
  }
});

export {
  getReview,
  createReview,
  upvoteReview,
  addComment,
  upvoteComment,
}