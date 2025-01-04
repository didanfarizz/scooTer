import express from "express";
import midtransClient from "midtrans-client";
import sendOtp from "../send-otp";

const router = express.Router();

router.post("/process-transaction", async (req, res) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-k_HK2CyuwM4X_XDRj7m8n2zq",
      clientKey: "SB-Mid-client-r575jHgegjOGxwkH",
    });

    const { orderId, amount, customerDetails } = req.body;

    if (!orderId || !amount || !customerDetails) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      customer_details: customerDetails,
    };

    const transaction = await snap.createTransaction(parameter);
    const token = transaction.token;

    res.status(200).json({
      message: "Transaction initiated successfully",
      token: token,
    });
  } catch (error) {
    console.error("Error creating transaction:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.post("/send-otp", async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ message: "Phone and OTP are required" });
  }

  try {
    await sendOtp(phone, otp); // Gunakan fungsi sendOtp dari `send-otp.js`
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    res.status(500).json({ message: "Failed to send OTP", error: error.message });
  }
});


export default router;
