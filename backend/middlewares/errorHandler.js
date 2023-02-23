module.exports = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const serverMode = process.env.NODE_ENV === "development" ? err.stack : null;
  res.status(statusCode).json({ code: statusCode, error: serverMode });
};
