import express from 'express';
import sendOtp from './send-otp.js';

const router = express.Router();

router.post('/api/send-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  try {
    sendOtp(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error in /api/send-otp:', error.message);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

export default router;
