import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getReview,
  createReview,
  upvoteReview,
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/:name', getReview);
router.post('/:name', protect, createReview);
router.put('/:name/upvote', protect, upvoteReview);

export default router;