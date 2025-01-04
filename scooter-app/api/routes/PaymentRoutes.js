import express from "express";
import midtransClient from "midtrans-client";

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

export default router;
