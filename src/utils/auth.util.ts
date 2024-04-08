import { TOTP } from 'totp-generator';
import { createHmac } from 'crypto';
import base32 from 'thirty-two';

function generateSecretKeyFromEmail(phone: any) {
  // Create a HMAC using SHA-256
  const hmac = createHmac('sha256', "EMAIL_OTP_SECRET");
  // Use the user's email as the data to hash
  hmac.update(phone);
  // Get the HMAC output as a buffer
  const hmacBuffer = hmac.digest();
  // Encode the buffer as base32
  const key = base32.encode(hmacBuffer);
  // Replace '=' characters added as padding by base32 encoding
  return key.toString().replace(/=/g, '');
}

function GenerateEmailLoginOtp(phone: any): any {
  const otpSecret: any = generateSecretKeyFromEmail(phone)
  return TOTP.generate(otpSecret, { period: 600 })
}

function VerifyEmailLoginOtp(phone: any, otp: any) {
  const generatedCode = GenerateEmailLoginOtp(phone)
  return otp == generatedCode?.otp
}

export {
  GenerateEmailLoginOtp,
  VerifyEmailLoginOtp,
}
