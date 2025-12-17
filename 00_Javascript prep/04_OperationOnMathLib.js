// Scenario
// You are implementing OTP verification.
// Tasks
// Generate a 6-digit OTP
// OTP must not start with 0
// OTP should expire in 2 minutes

const generateOTP = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};

const getExpiryTime = () => {
  const now = new Date();
  return new Date(now.getTime() + 2 * 60 * 1000);
};

console.log("OTP:", generateOTP());
console.log("Expires At:", getExpiryTime());
