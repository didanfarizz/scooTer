import { useUser } from "@clerk/clerk-react";
import ScooterNavbar from "../components/navbar";
import FooterPage from "../components/footer";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RentalsPage() {
  const { user } = useUser(); // Mendapatkan informasi user
  const navigate = useNavigate();
  const [status, setStatus] = useState("Inactive"); // Status user
  const [timeLeft, setTimeLeft] = useState(null); // Waktu tersisa dalam detik

  // Fetch status dan waktu aktif user dari backend
  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/user/status/${user.email}`);
        const { status, activeUntil } = response.data;
    
        setStatus(status);
    
        if (status === "Active") {
          const now = new Date();
          const endTime = new Date(activeUntil);
          const remainingTime = Math.floor((endTime - now) / 1000);
    
          if (remainingTime > 0) {
            setTimeLeft(remainingTime);
          } else {
            setStatus("Inactive");
          }
        }
      } catch (error) {
        console.error("Error fetching user status:", error.message);
      }
    };
    

    fetchUserStatus();
  }, [user.email]);

  // Timer untuk menghitung mundur waktu aktif
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus("Inactive"); // Set status ke Inactive jika waktu habis
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // Bersihkan timer saat komponen unmount
  }, [timeLeft]);

  return (
    <div className="">
      <div className="sticky top-0 py-2">
        <ScooterNavbar />
      </div>
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
          <div className="flex flex-col items-center">
            <img src={"/user.png"} alt="User Avatar" width={263} height={259} className="" />
            <h2 className="mt-4 text-xl font-semibold">{user?.fullName || "User"}</h2>
            <p className={`text-sm mt-1 ${status === "Active" ? "text-green-500" : "text-red-500"}`}>
              {status}
            </p>
            <p className="text-gray-500 mt-4">
              Durasi waktu: {status === "Active" && timeLeft !== null ? `${timeLeft} detik` : "-"}
            </p>
            {status === "Inactive" && (
              <Button
                onClick={() => navigate("/payment")}
                className="mt-6 px-4 py-2 bg-gray-300 text-black rounded-md"
              >
                Pesan
              </Button>
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
