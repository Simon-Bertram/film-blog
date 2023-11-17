const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error); // pass error to error handler
};

const errorHandler = (err, req, res, next) => {
  // if status code is 200, set to 500, else use res.statusCode
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; 
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}

export {
  notFound,
  errorHandler,
};