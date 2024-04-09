import UserModel from "../models/user.model";
import jwt from "jsonwebtoken";

const checkAuthToken = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const decoded: any = await jwt.verify(token, 'secret', async (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ success: false, message: "Invalid auth token", error: err });
    } else {
      const user = await UserModel.findById(decoded?.user_id);
      if (!user) {
        throw new Error("Invalid token");
      }
      req.user = user;
      next();

    }
  });
  
}

export default checkAuthToken;