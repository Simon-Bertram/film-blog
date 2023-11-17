import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
  },
  content: [{
    type: String,
    required: true,
  }],
  upvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;