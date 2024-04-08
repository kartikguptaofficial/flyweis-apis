import UserModel from "../models/user.model";
import { GenerateEmailLoginOtp, VerifyEmailLoginOtp } from "../utils/auth.util"

const getOrCreateUserController = async (req: any, res: any) => {
  const reqBody = req.body;
  console.log(`Payload: ${reqBody}`)
  const { email: userEmail, phone: phone, name: userName } = req.body;

  if (!userEmail || !userName || !phone) {
    return res.status(400).json({
      success: false,
      name: "Invalid credentials received"
    });
  }

  let userDetails: any;
  userDetails = await UserModel.findOne({ email: userEmail });

  if (userDetails) {
    userDetails.last_loggedin_at = Math.ceil(new Date().getTime() / 1000);
    await userDetails.save();
    return res.status(200).json({
      success: true,
      status: "ok",
      message: "Already registered! Login successful",
      data: userDetails
    })
  }

  userDetails = await UserModel.create({
    email: userEmail,
    name: userName,
    phone: phone
  })

  return res.status(200).json({
    success: true,
    status: "ok",
    message: "New User Registered!",
    data: userDetails
  })
}

const sendAuthOTPController = async (req: any, res: any) => {
  const phoneNo: any = req.body?.phone;

  if (!phoneNo) return res.status(400).json({
    success: false,
    message: "Invalid phone number received"
  })

  const otp = GenerateEmailLoginOtp(`${phoneNo}`);
  return res.status(200).json({
    success: true,
    status: "ok",
    message: "OTP sent successfully",
    data: otp
  })
}

const verifyAuthOTPController = async (req: any, res: any) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({
    success: false,
    message: "Invalid phone number or OTP received"
  })

  const isValid = VerifyEmailLoginOtp(`${phone}`, otp);
  if (!isValid) return res.status(400).json({
    success: false,
    message: "Invalid OTP received"
  })

  return res.status(200).json({
    success: true,
    status: "ok",
    message: "OTP verified successfully"
  })
}

export {
  getOrCreateUserController,
  sendAuthOTPController,
  verifyAuthOTPController
}