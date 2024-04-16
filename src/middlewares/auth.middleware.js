const UserModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const checkAuthToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const decoded = await jwt.verify(token, "secret", async (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid auth token", error: err });
    } else {
      const user = await UserModel.findById(decoded?.user_id);
      if (!user) {
        throw new Error("Invalid token");
      }
      req.user = user;
      next();
    }
  });
};

module.exports = checkAuthToken;
