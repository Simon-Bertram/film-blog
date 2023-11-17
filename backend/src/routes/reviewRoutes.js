import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getReview,
  createReview,
  upvoteReview,
  addComment,
  upvoteComment,
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/:name', getReview);
router.post('/:name', protect, createReview);
router.put('/:name/upvote', protect, upvoteReview);
router.post('/:name/addComment', addComment);
router.put('/:comment_id/upvoteComment', upvoteComment);

export default router;