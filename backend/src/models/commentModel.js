import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true
  },
  upvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;