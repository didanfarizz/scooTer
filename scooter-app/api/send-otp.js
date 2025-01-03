import nodemailer from "nodemailer";

// Fungsi untuk mengirim OTP
const sendOtp = (email, otp) => {
  console.log(`Preparing to send OTP to ${email} with code: ${otp}`);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "didanfarizabqari@gmail.com", // Ganti dengan email Anda
      pass: "DanDinDan201537_*", // Ganti dengan password email Anda
    },
  });

  const mailOptions = {
    from: "didanfarizabqari@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending OTP:", error.message);
    } else {
      console.log("OTP sent: " + info.response);
    }
  });
};

export default sendOtp;
