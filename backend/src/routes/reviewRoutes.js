import express from 'express';
import {
  getReview,
  createReview,
  upvoteReview,
  addComment,
  upvoteComment,
} from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:name', getReview);
router.route('/:name')
  .post(protect, createReview);
router.put('/:name/upvote', protect, upvoteReview);
router.post('/:name/addComment', protect, addComment);
router.put('/:comment_id/upvoteComment', protect, upvoteComment);

export default router;