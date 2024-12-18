// import React from 'react';
import { Button } from '@material-tailwind/react';
import { useUser} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser(); // Clerk hook untuk mengecek status login

  return (
    <div>
      <div className="lg:p-0 lg:top-0 p-4 absolute -z-10">
        {/* Background Images */}
        <img src="/dashboard.png" alt="dashboard" className="w-full h-full bg-cover hidden lg:block" />
        <img src="/mobile-dashboard.png" alt="dashboard" className="w-full lg:hidden bg-cover" />
      </div>

      <div className="lg:px-14 lg:flex lg:flex-col lg:gap-y-4 lg:py-32">
        <div className="lg:hidden px-10 text-center pt-48 animate__animated animate__fadeInUp animate__delay-3s">
          <p className="text-2xl text-[#e5e5e5] font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Scoot Into a Greener Tomorrow!
          </p>
        </div>

        <div className="text-shadow lg:flex lg:flex-col lg:gap-y-4 lg:items-start hidden">
          <p className="text-6xl text-[#e5e5e5] font-bold animate__animated animate__fadeInUp animate__delay-3s" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Scoot into a
          </p>
          <p className="text-6xl text-[#e5e5e5] font-bold animate__animated animate__fadeInUp animate__delay-3s" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Greener
          </p>
          <p className="text-6xl text-[#e5e5e5] font-bold animate__animated animate__fadeInUp animate__delay-3s" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Tomorrow!
          </p>
        </div>

        {/* Pesan Sekarang Button */}
        <div className="lg:flex flex items-center justify-center lg:justify-start py-2 animate__animated animate__fadeInUp animate__delay-4s">
          {isSignedIn ? (
            // Button aktif jika user login
            <Button
              onClick={() => navigate('/payment-form')}
              className="lg:w-96 lg:text-2xl bg-[#3d3d3d] text-[#e5e5e5] rounded-[15px] hover:bg-[#e5e5e5] hover:text-[#3d3d3d]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Pesan Sekarang!
            </Button>
          ) : (
            // Button non-aktif jika user belum login
            <Button
              disabled
              className="lg:w-96 lg:text-2xl bg-[#3d3d3d] text-[#e5e5e5] rounded-[15px] cursor-not-allowed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Pesan Sekarang!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
