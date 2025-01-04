import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Toaster, toast } from "sonner";
import axios from "axios";

const PaymentForm = () => {
  // State untuk setiap input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  const handleAddOrder = () => {
    if (!firstName || !lastName || !email || !phone || !city) {
      toast.error("All fields are required!");
      return;
    }

    const randomId = `CUS${Math.random().toString(36).substring(2, 6)}`;
    const newOrder = {
      id: randomId,
      name: `${firstName} ${lastName}`,
      email,
      phone,
      city,
    };

    setOrderDetails(newOrder);
    toast.success("Order added successfully!");
  };

  const handlePayment = async () => {
    if (!orderDetails) {
      toast.error("No order details available!");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:1000/api/payment/process-transaction",
        {
          orderId: orderDetails.id,
          amount: 25000,
          customerDetails: {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            city,
          },
        }
      );
  
      if (response.status === 200) {
        const { token } = response.data;
  
        if (token && window.snap) {
          window.snap.pay(token, {
            onSuccess: async () => {
              toast.success("Payment successful!");
  
              // Update status user menjadi Active
              try {
                await axios.post("http://localhost:1000/api/user/update-status", {
                  email, // Kirim email user untuk identifikasi
                  status: "Active", // Set status Active
                });
                navigate("/rentals"); // Redirect ke RentalsPage
              } catch (error) {
                console.error("Error updating status:", error.message);
                toast.error("Failed to update user status.");
              }
            },
            onPending: () => {
              toast.info("Payment pending!");
            },
            onError: () => {
              toast.error("Payment failed!");
            },
            onClose: () => {
              console.log("Payment popup closed");
            },
          });
        } else {
          throw new Error("Snap library is not loaded or token is invalid.");
        }
      }
    } catch (error) {
      console.error("Error initiating payment:", error.message);
      toast.error("Failed to initiate payment!");
    }
  };
  
  
  
  
  

  return (
    <div>
      <Toaster position="top-center" richColors />
      <div className="font-[sans-serif] bg-white">
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="max-w-4xl w-full h-max rounded-md px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
            <form className="mt-8">
              <div>
                <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="px-4 py-3 bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="px-4 py-3 bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                  <input
                    type="number"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="px-4 py-3 bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-base text-gray-800 mb-4">Location</h3>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="px-4 py-3 bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                />
                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="rounded-md px-6 py-3 w-full text-sm bg-transparent border text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAddOrder}
                    className="rounded-md px-6 py-3 w-full text-sm bg-blue-600 text-white"
                  >
                    Add Order
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 sm:h-screen">
            {orderDetails && (
              <div>
                <img src="/scooter-img.jpg" className="w-full object-contain" alt="Scooter" />
                <ul>
                  <li>Id: {orderDetails.id}</li>
                  <li>Name: {orderDetails.name}</li>
                  <li>Email: {orderDetails.email}</li>
                  <li>Phone: {orderDetails.phone}</li>
                  <li>City: {orderDetails.city}</li>
                </ul>
                <Button onClick={handlePayment}>Pay Now</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
