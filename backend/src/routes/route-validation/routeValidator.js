import { Router } from "express";

const router = Router();

router.get("/:item", (req, res, next) => {
  const item = req.params.item;
  
  if(!item) {
    return next(createError(404, 'Not found'));
  }

  if(typeof item !== 'string') {
    return next(createError(400, 'Item must be a string'));
  }

  const routePaths = [
    // User routes
    '/auth', 
    '/register', 
    '/logout', 
    '/profile',
    // Review routes
    '/all',
    router.get('/:name', getReview),
    router.route('/:name'),
    router.put('/:name/upvote', protect, upvoteReview),
    router.post('/:name/addComment', protect, addComment),
    router.put('/:comment_id/upvoteComment', protect, upvoteComment),
  ];
  

  if(!['/auth', '/register', '/logout', '/profile'].includes(item)) {
    return next(createError(404, 'Item is required'));
  }

  return next();
});

export default router;