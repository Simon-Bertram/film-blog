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

// Populate the postedBy field with the corresponding username
commentSchema.virtual('postedByUser', {
  ref: 'User',
  localField: 'postedBy',
  foreignField: '_id',
  justOne: true,
});

// Create a custom getting to return the username instead of the id
commentSchema.set('toJSON', {
  virtuals: true,
  transform: (_, doc) => {
    doc.postedByUser = doc.postedBy.username;
    delete doc.postedBy;
    return doc;
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;