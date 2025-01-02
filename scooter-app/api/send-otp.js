import nodemailer from 'nodemailer';

// Fungsi untuk mengirim OTP
const sendOtp = (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',  // Ganti dengan email Anda
      pass: 'your-email-password',  // Ganti dengan password email Anda
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending OTP:', error);
    } else {
      console.log('OTP sent: ' + info.response);
    }
  });
};

export default sendOtp;
