import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import midtransClient from 'midtrans-client';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Midtrans Client Configuration
const snap = new midtransClient.Snap({
  isProduction: false, // Ganti ke true untuk production
  serverKey: 'SB-Mid-server-k_HK2CyuwM4X_XDRj7m8n2zqY',
  clientKey: 'SB-Mid-client-r575jHgegjOGxwkH',
});

// Endpoint untuk membuat transaksi
app.post('/create-transaction', async (req, res) => {
  const { orderId, amount, customerDetails } = req.body;

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
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
