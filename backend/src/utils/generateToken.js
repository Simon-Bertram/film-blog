import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  
    const options = {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      samesite: 'strict',
    };
  
    res.cookie('jwt', token, options);
  } catch (error) {
    console.error(error);
  }
  
}

export default generateToken;