import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import { v4 as uuidv4 } from 'uuid';  // Digunakan untuk membuat ID unik untuk order
import sendOtp from './send-otp.js';  // Pastikan file send-otp.js ada di direktori yang sesuai

const app = express();
const port = 1000;

// Middleware
app.use(cors());  // Untuk menangani masalah CORS (Cross-Origin Resource Sharing)
app.use(bodyParser.json());  // Untuk parsing JSON request body

// Dummy database untuk menyimpan data pengguna dan OTP
const users = {};

// Endpoint untuk memproses transaksi pembayaran
app.post('/api/payment/process-transaction', async (req, res) => {
  try {
    const { orderId, amount, customerDetails } = req.body;

    // Validasi data yang diterima
    if (!orderId || !amount || !customerDetails) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    // Simulasi penyimpanan data order dan informasi pengguna
    users[customerDetails.email] = {
      ...customerDetails,
      orderId,
      otp: null,
      isVerified: false,
    };

    // Mengirimkan response setelah transaksi dimulai
    res.status(200).json({ message: "Transaction initiated", token: "fake_token" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// Endpoint untuk mengirim OTP ke email pengguna
app.post('/api/send-otp', (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  // Kirim OTP melalui metode yang ada pada sendOtp.js (misalnya dengan email)
  sendOtp(email, otp);

  // Simpan OTP pada pengguna yang sesuai di database sementara
  if (users[email]) {
    users[email].otp = otp;
    res.status(200).json({ message: 'OTP sent successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Endpoint untuk memverifikasi OTP
app.post('/api/verify-otp', (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp) {
    return res.status(400).json({ error: 'Data not complete' });
  }

  const user = users[userId];

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Verifikasi OTP yang dikirimkan
  if (user.otp === otp) {
    user.isVerified = true;
    return res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ error: 'Invalid OTP' });
  }
});

// Menjalankan server di port yang telah ditentukan
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
