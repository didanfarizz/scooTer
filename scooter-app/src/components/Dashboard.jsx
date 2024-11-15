import { Button } from '@material-tailwind/react';

const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="lg:p-0 lg:top-0 p-4 absolute -z-10">
          <img src="/dashboard.png" alt="dashboard" width={1440} height={812} className="w-full h-full bg-cover hidden lg:block" />
          <img src="/mobile-dashboard.png" alt="dashboard" width={1440} height={812} className="w-full lg:hidden bg-cover" />
        </div>
        <div className="lg:px-14 lg:flex lg:flex-col lg:gap-y-4 lg:py-32">
          <div className="lg:hidden px-10 text-center pt-48 text-shadow animate__animated animate__fadeInUp animate__delay-3s animate__slow">
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-2xl text-[#e5e5e5] font-bold">
              Scoot Into a Greener Tomorrow!
            </p>
          </div>
          <div className="text-shadow lg:flex lg:flex-col lg:gap-y-4 lg:items-start hidden">
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-6xl text-[#e5e5e5] font-bold animate__animated animate__fadeInUp animate__delay-3s animate__slow">
              Scoot into a
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-6xl text-[#e5e5e5] font-bold animate__animated animate__fadeInUp animate__delay-3s animate__slow">
              Greener
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-6xl text-[#e5e5e5] font-bold animate__animated animate__fadeInUp animate__delay-3s animate__slow">
              Tomorrow!
            </p>
          </div>
          <div className="lg:flex flex items-center justify-center lg:justify-start lg:items-start py-2 animate__animated animate__fadeInUp animate__delay-4s animate__slow">
            <Button className="lg:w-96 lg:text-2xl bg-[#3d3d3d] text-[#e5e5e5] rounded-[15px] hover:bg-[#e5e5e5] hover:text-[#3d3d3d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Pesan Sekarang!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
