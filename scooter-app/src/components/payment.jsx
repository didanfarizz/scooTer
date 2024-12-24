import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { Toaster, toast } from 'sonner';

const PaymentForm = () => {
  const handlePayment = async () => {
    if (!orderDetails) {
      toast.error('No order details available!');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/create-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: orderDetails.id, // ID transaksi
          amount: 25000, // Nominal pembayaran
          customerDetails: {
            first_name: orderDetails.name.split(' ')[0],
            last_name: orderDetails.name.split(' ')[1] || '',
            email: orderDetails.email,
            phone: orderDetails.phone,
          },
        }),
      });
  
      const { token } = await response.json();
      if (token) {
        // Buka Snap Payment
        window.snap.pay(token, {
          onSuccess: function (result) {
            console.log('Success:', result);
            toast.success('Payment successful!');
          },
          onPending: function (result) {
            console.log('Pending:', result);
            toast.info('Payment pending!');
          },
          onError: function (result) {
            console.log('Error:', result);
            toast.error('Payment failed!');
          },
          onClose: function () {
            console.log('Payment popup closed');
          },
        });
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error('Failed to initiate payment!');
    }
  };
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
  });
  const [orderDetails, setOrderDetails] = useState(null);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani klik tombol "Add Order"
  const handleAddOrder = () => {
    const { firstName, lastName, email, phone, city } = formData;

    // Validasi jika ada field yang kosong
    if (!firstName || !lastName || !email || !phone || !city) {
      toast.error('All fields are required!');
      return;
    }

    const randomId = `CUS${Math.random().toString(36).substr(2, 6).toUpperCase()}`; // Generate random ID
    const newOrder = {
      id: randomId,
      name: `${formData.firstName} ${formData.lastName}`, // Gabungkan First Name dan Last Name
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
    };
    setOrderDetails(newOrder);
    toast.success('Order added successfully!');
  };

  return (
    <div>
      <Toaster position="top-center" richColors/>

      <div className="font-[sans-serif] bg-white">
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="max-w-4xl w-full h-max rounded-md px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Complete your order
            </h2>
            <form className="mt-8">
              <div>
                <h3 className="text-base text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone No."
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Location
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>

                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    type="button"
                    onClick={() => navigate('/')}
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    type="button"
                    onClick={handleAddOrder}
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Add Order
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-gradient-to-r from-[#3d3d3d] to-gray-700 sm:h-screen sm:sticky sm:top-0 sm:min-w-[300px]">
            <div className="relative h-full">
              <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div>
                  <div className="space-y-6">
                    {orderDetails && (
                      <>
                        <div className="p-3 shrink-0 rounded-md">
                          <img src="/scooter-img.jpg" className="w-full object-contain" />
                        </div>
                        <div className="w-full">
                          <h3 style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-base text-white">
                            Details
                          </h3>
                          <ul className="text-xs text-gray-300 space-y-2 mt-2">
                            <li className="flex flex-wrap gap-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              Id Pelanggan <span className="ml-auto">{orderDetails.id}</span>
                            </li>
                            <li className="flex flex-wrap gap-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              Name <span className="ml-auto">{orderDetails.name}</span>
                            </li>
                            <li className="flex flex-wrap gap-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              Email <span className="ml-auto">{orderDetails.email}</span>
                            </li>
                            <li className="flex flex-wrap gap-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              Phone <span className="ml-auto">{orderDetails.phone}</span>
                            </li>
                            <li className="flex flex-wrap gap-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              City <span className="ml-auto">{orderDetails.city}</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {orderDetails && (
                  <div className="md:absolute md:left-0 md:bottom-0 bg-[#3d3d3d] w-full p-4 space-y-3">
                    <h4 className="flex flex-wrap gap-4 text-base text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Total <span className="ml-auto">Rp 25.000</span>
                    </h4>
                    <Button
                      onClick={handlePayment}
                      className="lg:w-full lg:text-lg bg-[#3d3d3d] text-[#e5e5e5] rounded-[15px] hover:bg-[#e5e5e5] hover:text-[#3d3d3d]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                      type="button"
                    >
                      Bayar Sekarang
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
