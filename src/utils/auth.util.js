const { TOTP } = require("totp-generator");
const { createHmac } = require("crypto");
const base32 = require("thirty-two");
const jwt = require("jsonwebtoken");

function generateSecretKeyFromPhone(phone) {
  // Create a HMAC using SHA-256
  const hmac = createHmac("sha256", "EMAIL_OTP_SECRET");
  // Use the user's email as the data to hash
  hmac.update(phone);
  // Get the HMAC output as a buffer
  const hmacBuffer = hmac.digest();
  // Encode the buffer as base32
  const key = base32.encode(hmacBuffer);
  // Replace '=' characters added as padding by base32 encoding
  return key.toString().replace(/=/g, "");
}

function GenerateEmailLoginOtp(phone) {
  const otpSecret = generateSecretKeyFromPhone(phone);
  return TOTP.generate(otpSecret, { period: 600 });
}

function VerifyEmailLoginOtp(phone, otp) {
  const generatedCode = GenerateEmailLoginOtp(phone);
  return otp == generatedCode?.otp;
}

const generateJsonWebToken = (email, userId) => {
  return jwt.sign(
    {
      user_id: userId,
      email: email,
    },
    "secret",
    { expiresIn: "1h" },
  );
};

module.exports = { GenerateEmailLoginOtp, VerifyEmailLoginOtp, generateJsonWebToken };
