import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import PropTypes from "prop-types";
import FooterPage from "../components/footer";

export default function RentalsPage({ user }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Inactive");
  const [timeLeft, setTimeLeft] = useState(null);

  // Fetch status user dari backend
  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/user/status/${user.email}`
        );

        const { status, activeUntil } = response.data;
        setStatus(status);

        if (status === "Active" && activeUntil) {
          const now = new Date();
          const endTime = new Date(activeUntil);
          const remainingTime = Math.floor((endTime - now) / 1000);

          if (remainingTime > 0) {
            setTimeLeft(remainingTime);
          } else {
            setStatus("Inactive");
            setTimeLeft(null);
          }
        }
      } catch (error) {
        console.error("Error fetching user status:", error.message);
      }
    };

    fetchUserStatus();
  }, [user.email]);

  // Countdown timer
  useEffect(() => {
    if (!timeLeft) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setStatus("Inactive");
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Proteksi halaman
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
          <div className="flex flex-col items-center">
            <img
              src="/user.png"
              alt="User Avatar"
              width={263}
              height={259}
            />

            <h2 className="mt-4 text-xl font-semibold">
              {user.displayName || user.email}
            </h2>

            <p
              className={`text-sm mt-1 ${
                status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>

            <p className="text-gray-500 mt-4">
              Durasi waktu:{" "}
              {status === "Active" && timeLeft !== null
                ? `${timeLeft} detik`
                : "-"}
            </p>

            {status === "Inactive" && (
              <Button
                onClick={() => navigate("/payment")}
                className="mt-6 px-4 py-2 bg-gray-300 text-black"
              >
                Pesan
              </Button>
            )}
          </div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}

RentalsPage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    displayName: PropTypes.string,
  }),
};
