module.exports = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message,
    statusCode: res.statusCode,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};
