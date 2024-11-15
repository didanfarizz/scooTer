// import React from 'react'
// import { useRef, useState, useEffect } from 'react';

const About = () => {
  return (
    <div className="lg:py-16 lg:mt-24 py-40 lg:px-10">
      <div className="lg:flex">
        <div className={`lg:w-3/6`}>
          <img src="/about-img.png" alt="about scooTer" width={471} height={619} className={`hidden lg:block animate__animated animate__fadeInLeft animate__slow`} />
          <img src="/about-img-mobile.png" alt="about scooTer" width={441} height={619} className="lg:hidden absolute -z-10 animate__animated animate__fadeIn animate__slow" />
        </div>
        <div className="lg:w-5/6 lg:flex lg:justify-center lg:items-center">
          <div className="hidden lg:block">
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="lg:text-3xl text-[#3d3d3d] leading-loose animate__animated animate__fadeInRight animate__slow">
              Website Scooter, menyediakan e-scooter sebagai solusi transportasi yang inovatif dan berkelanjutan. Scooter sendiri dilengkapi dengan baterai yang efisien dan terbuat dari bahan berkelanjutan, sehingga lebih ramah lingkungan.
              Menyewa scooter sangat mudah melalui website kami—cukup cari dan akses scooter dengan kode yang akan dikirimkan melalui email. Bergabunglah dalam gerakan menuju kota yang lebih hijau dan nikmati kebebasan berkendara dengan
              scooter!
            </p>
          </div>
        </div>
        <div className="lg:hidden py-20">
          <div className="mx-4 text-center leading-loose bg-[#e5e5e5] bg-opacity-60 rounded-[10px] animate__animated animate__fadeInUp animate__slow animate__delay-1s">
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className=" text-lg text-[#3d3d3d] leading-relaxed animate__animated animate__bounceInUp animate__slower animate__delay-2s">
              Website Scooter, menyediakan e-scooter sebagai solusi transportasi yang inovatif dan berkelanjutan. Scooter sendiri dilengkapi dengan baterai yang efisien dan terbuat dari bahan berkelanjutan, sehingga lebih ramah lingkungan.
              Menyewa scooter sangat mudah melalui website kami—cukup cari dan akses scooter dengan kode yang akan dikirimkan melalui email. Bergabunglah dalam gerakan menuju kota yang lebih hijau dan nikmati kebebasan berkendara dengan
              scooter!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
