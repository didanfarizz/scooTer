import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import ScooterNavbar from '../components/navbar';
import FooterPage from '../components/footer';
import { Button, Input } from '@material-tailwind/react';
import axios from 'axios';

export default function RentalsPage() {
  const { user } = useUser(); // Mendapatkan informasi user
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null); // Menyimpan detail pesanan (order)
  
  useEffect(() => {
    // Cek jika ada data penyewaan yang telah dilakukan
    if (user?.id) {
      // Simulasi pengecekan status penyewaan
      // (Contoh ini menggunakan state lokal, Anda bisa mengganti dengan API yang benar)
      axios.get(`http://localhost:1000/api/check-order/${user.id}`).then((response) => {
        setOrderDetails(response.data.orderDetails);
      }).catch((error) => {
        console.error("Error fetching order details", error);
      });
    }
  }, [user]);

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP!");
      return;
    }

    try {
      // Verifikasi OTP ke backend
      const response = await axios.post("http://localhost:1000/api/verify-otp", {
        userId: user?.id,
        otp,
      });

      if (response.status === 200) {
        setIsVerified(true);
        alert("OTP verified successfully!");

        // Set status pengguna menjadi active dan mulai timer
        let countdown = 60 * 60; // 1 jam
        setTimer(countdown);
        const interval = setInterval(() => {
          countdown -= 1;
          setTimer(countdown);
          if (countdown <= 0) {
            clearInterval(interval);
          }
        }, 1000);
      } else {
        alert("Invalid OTP!");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP!");
    }
  };

  const handleOrder = async () => {
    // Logika untuk memesan atau menyewa scooter
    // Kirim request untuk memesan dan mendapatkan detail pesanan
    try {
      const response = await axios.post('http://localhost:1000/api/order', {
        userId: user.id,
      });

      setOrderDetails(response.data.orderDetails); // Menyimpan detail pesanan
      alert('Order placed successfully!');
      navigate('/payment'); // Arahkan ke halaman pembayaran
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order!");
    }
  };

  return (
    <div className="">
      <div className="sticky top-0 py-2">
        <ScooterNavbar />
      </div>
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
          <div className="flex flex-col items-center">
            <img src={'/user.png'} alt="User Avatar" width={263} height={259} />
            <h2 className="mt-4 text-xl font-semibold">{user?.fullName || 'User'}</h2>
            <p className="text-sm text-red-500 mt-1">{isVerified ? 'Active' : 'Inactive'}</p>
            {isVerified && timer > 0 ? (
              <p className="text-sm text-green-500 mt-1">Remaining time: {Math.floor(timer / 60)}:{timer % 60}</p>
            ) : null}

            {/* Display either the Order button or order details */}
            {!orderDetails && !isVerified && (
              <div>
                <Button onClick={handleOrder} className="mt-6 px-4 py-2 bg-gray-300 text-black rounded-md">
                  Pesan Scooter
                </Button>
              </div>
            )}

            {orderDetails && (
              <div>
                <p className="text-sm mt-4">Order ID: {orderDetails.id}</p>
                <p className="text-sm mt-1">Status: {orderDetails.status}</p>
                <Button onClick={() => navigate('/payment')} className="mt-6 px-4 py-2 bg-gray-300 text-black rounded-md">
                  Lihat Pesanan
                </Button>
              </div>
            )}

            {/* Display OTP verification section if not verified */}
            {!isVerified && (
              <div className="mt-4">
                <Input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  label="Enter OTP"
                  className="mb-4"
                />
                <Button onClick={handleVerifyOtp} className="mt-4">
                  Verifikasi OTP
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <FooterPage />
      </div>
    </div>
  );
}
