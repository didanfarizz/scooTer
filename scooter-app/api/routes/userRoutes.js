import express from "express";

const router = express.Router();

// Mock database untuk menyimpan status user
const users = {
  "test@example.com": {
    status: "Inactive",
    activeUntil: null,
  },
  "active@example.com": {
    status: "Active",
    activeUntil: new Date(Date.now() + 3600 * 1000), // 1 jam dari sekarang
  },
};

// Endpoint untuk mendapatkan status user berdasarkan email
router.get("/user/status/:email", (req, res) => {
  const { email } = req.params;

  if (!users[email]) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    status: users[email].status,
    activeUntil: users[email].activeUntil,
  });
});

export default router;
