import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  // create a variable for the token
  let token;

  // set the token variable to the jwt cookie in the request
  if (!req.cookies.jwt) {
    res.status(401);
    throw new Error("Not authorized, no token");
  } else {
    try {
      token = req.cookies.jwt;
      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Fetch the user by the decoded token's id
      req.user = await User.findById(decoded.userId).select('-password');

      next(); 
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }
});

export { protect };