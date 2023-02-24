const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const [type, token] = req.headers.authorization.split(" ");
  if (!token || type !== "Bearer") {
    res.status(400);
    throw new Error("Auth token is not provided");
  }
  try {
    const { data } = jwt.verify(token, "macho");
    req.user = data;
    next();
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
};
