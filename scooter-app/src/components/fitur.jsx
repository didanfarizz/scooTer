// import React from 'react'

const FiturPage = () => {
  return (
    <div className="w-full bg-[#e9e9e9] lg:py-32 py-7 lg:px-14 lg:rounded-b-[100px] rounded-b-[50px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-24">
        <div className="flex flex-col px-16 lg:px-0 justify-center items-center gap-5 lg:gap-20">
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="font-bold lg:text-2xl text-shadow-fitur text-[#3d3d3d]">
            Ramah Lingkungan
          </p>
          <img src="/bio-energy.png" alt="bio energy" width={200} height={200} className="text-center hidden lg:block" />
          <img src="/bio-energy-mobile.png" alt="bio energy" width={100} height={100} className="text-center lg:hidden" />
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-center lg:text-md text-sm text-[#3d3d3d]">
            Bagi pengguna yang peduli terhadap lingkungan, scooTer menjadi pilihan transportasi yang berkelanjutan dan ramah lingkungan.
          </p>
        </div>
        <div className="flex flex-col px-16 lg:px-0 justify-center items-center gap-5 lg:gap-20">
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="font-bold lg:text-2xl text-shadow-fitur text-[#3d3d3d]">
            Tahan Cuaca
          </p>
          <img src="/waterproof.png" alt="waterproof" width={200} height={200} className="text-center hidden lg:block" />
          <img src="/waterproof-mobile.png" alt="waterproof" width={100} height={100} className="text-center lg:hidden" />
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-center lg:text-md text-sm text-[#3d3d3d]">
            scooTer akan memberikan rasa aman bagi pengguna yang harus berkendara dalam berbagai kondisi cuaca.
          </p>
        </div>
        <div className="flex flex-col px-16 lg:px-0 justify-center items-center gap-5 lg:gap-20">
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="font-bold lg:text-2xl text-shadow-fitur text-[#3d3d3d]">
            Mempersingkat Waktu
          </p>
          <img src="/deadline.png" alt="deadline" width={200} height={200} className="text-center hidden lg:block" />
          <img src="/deadline.png" alt="deadline" width={100} height={100} className="text-center lg:hidden" />
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-center lg:text-md text-sm text-[#3d3d3d]">
            scooTer sangat cocok untuk perjalanan jarak pendek di perkotaan, seperti perjalanan ke kantor, kampus, atau pusat perbelanjaan, tanpa harus terjebak macet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiturPage;
