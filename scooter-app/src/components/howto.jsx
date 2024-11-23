// import React from 'react'

const HowToPage = () => {
  return (
    <div>
      <div className="flex lg:justify-center lg:items-center font-bold text-[#3d3d3d] text-2xl lg:p-0 p-4">
        <p style={{ fontFamily: 'Montserrat, sans-serif' }}>How To scooTer?</p>
      </div>
      <div className="lg:px-14 lg:py-9 lg:flex lg:flex-col lg:gap-y-9">
        <div className="lg:px-0 px-4 flex flex-col lg:flex-row justify-between items-center lg:gap-20 gap-4">
          <div className="lg:w-1/2 w-full bg-[#3d3d3d] lg:py-12 lg:px-9 py-7 px-8 rounded-[30px] shadow-[6px_6px_2px_2px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center gap-5 lg:gap-7">
              <img src="/login.png" alt="login" width={150} height={150} />
              <div className="">
                {/* <div className="w-10 bg-[#f7f7f7] h-10 rounded-full flex justify-center items-center">1</div> */}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#fefefe] lg:text-3xl font-bold">
                  Login untuk memiliki akun
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-[#fefefe] lg:py-12 lg:px-9 py-7 px-8 rounded-[30px] shadow-[6px_6px_4px_2px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center gap-5 lg:gap-7">
              <img src="/earth.png" alt="login" width={150} height={150} />
              <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#3d3d3d] lg:text-3xl font-bold">
                Mencari lokasi scooTer terdekat
              </p>
            </div>
          </div>
        </div>
        <div className="lg:p-0 p-4 flex flex-col lg:flex-row justify-between items-center lg:gap-20 gap-y-4">
          <div className="lg:w-1/2 w-full lg:bg-[#fefefe] bg-[#3d3d3d] lg:py-12 lg:px-9 py-7 px-8 rounded-[30px] shadow-[6px_6px_2px_2px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center lg:gap-7 gap-5">
              <img src="/pay.png" alt="login" width={150} height={150} />
              <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="lg:text-[#3d3d3d] text-[#fefefe] lg:text-3xl font-bold">
                Melakukan pemesanan dan pembayaran
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:bg-[#3d3d3d] bg-[#fefefe] lg:py-12 lg:px-9 py-7 px-8 rounded-[30px] shadow-[6px_6px_4px_2px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center lg:gap-7 gap-5">
              <img src="/email.png" alt="login" width={150} height={150} />
              <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="lg:text-[#fefefe] text-[#3d3d3d] lg:text-3xl font-bold">
                Mendapatkan kode akses scooTer melalui Email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPage;
