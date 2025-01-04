import twilio from "twilio";

// Konfigurasi Twilio
const accountSid = "your_account_sid"; // Ganti dengan Twilio Account SID
const authToken = "your_auth_token"; // Ganti dengan Twilio Auth Token
const whatsappNumber = "your_twilio_whatsapp_number"; // Ganti dengan nomor WhatsApp Twilio Anda
const client = twilio(accountSid, authToken);

// Fungsi untuk mengirim OTP
const sendOtp = async (phone, otp) => {
  try {
    console.log(`Preparing to send OTP to ${phone} via WhatsApp: ${otp}`);
    const message = await client.messages.create({
      from: `whatsapp:${whatsappNumber}`,
      to: `whatsapp:${phone}`,
      body: `Your OTP code is: ${otp}. Please use this to activate your account.`,
    });
    console.log("OTP sent successfully:", message.sid);
  } catch (error) {
    console.error("Error sending OTP:", error.message);
  }
};

export default sendOtp;
