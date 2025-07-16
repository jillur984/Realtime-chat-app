import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "UnAuthorized No token provided" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res
        .status(401)
        .json({ message: "UnAuthorized No token provided" });
    }
    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    req.user = user; // req a rekhe dilam jate pore easy vabe pawa jay
    next();
  } catch (error) {
    console.log("error in protected route", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
