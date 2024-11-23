// import React from 'react'

const FooterPage = () => {
  return (
    <footer className="bg-[#33CCCCCC] lg:px-14 rounded-t-[50px] lg:-mt-10 -mt-9">
      <div className="lg:flex lg:justify-between lg:items-center lg:py-20 py-8">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="lg:-ml-0 -ml-3">
            <img src="/scoot-logo 2.png" alt="logo footer" width={200} height={100} className="lg:block hidden" />
            <img src="/scoot-logo 2.png" alt="logo footer" width={120} height={100} className="lg:hidden block" />
          </div>
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="lg:px-0 px-4 lg:text-base text-sm text-[#fefefe] font-bold text-shadow">
            scooTer - &quot;Cepat, Praktis, Bebas Polusi!&quot;
          </p>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:gap-x-14">
          <div className="lg:px-0 px-4 lg:py-0 py-7">
            <p className="lg:text-xl text-[#fefefe] font-bold text-shadow">Useful Links</p>
            <ul className="lg:text-base text-sm text-[#fefefe] lg:text-end flex flex-col lg:gap-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fitur</a>
              </li>
              <li>
                {' '}
                <a href="#">How To ?</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="lg:pb-24 lg:px-0 px-4">
            <p className="lg:text-xl text-[#fefefe] font-bold text-shadow lg:text-end">Contact Us</p>
            <p className="lg:text-base text-[#fefefe] lg:text-end">+62 812-3456-7890</p>
          </div>
        </div>
      </div>
      <div className="lg:px-0 px-4">
        <p className="text-center text-sm lg:text-base text-[#fefefe]">Copyright © 2024 Pemrograman Berbasis Web & Made With 🧡 By Kelompok 4</p>
      </div>
    </footer>
  );
};

export default FooterPage;
