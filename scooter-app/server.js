import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import midtransClient from "midtrans-client";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-k_HK2CyuwM4X_XDRj7m8n2zqY",
});

app.post("/create-transaction", async (req, res) => {
  const { orderId, amount, customerDetails } = req.body;

  if (!orderId || !amount || !customerDetails) {
    return res
      .status(400)
      .json({ error: "Invalid request: Missing required fields" });
  }

  if (
    typeof orderId !== "string" ||
    typeof amount !== "number" ||
    typeof customerDetails !== "object"
  ) {
    return res
      .status(400)
      .json({ error: "Invalid request: Incorrect data types" });
  }

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: amount,
    },
    customer_details: customerDetails,
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });
  } catch (error) {
    console.error("Error creating transaction:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
