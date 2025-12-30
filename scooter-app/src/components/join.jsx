// import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const JoinPage = ({ user }) => {
  const navigate = useNavigate();
  const isSignedIn = !!user; // Mengambil status login user dari Firebase

  return (
    <div className="bg-[#e9e9e9]">
      <div className="lg:py-14 py-16 flex justify-center items-center lg:gap-x-10 gap-x-7">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:gap-y-5 gap-y-1 justify-center items-center">
            {/* Gambar untuk tampilan Desktop dan Mobile */}
            <img src="/owner-now.png" alt="join" width={333} height={78} className="hidden lg:block" />
            <img src="/owner-now.png" alt="join-mobile" width={150} height={25} className="lg:hidden" />

            {/* Button Pesan Sekarang */}
            {isSignedIn ? (
              // Jika user sudah login, button aktif
              <button onClick={() => navigate('/payment')} className="bg-[#708090] text-[#e5e5e5] lg:px-5 lg:py-3 px-3 py-1 rounded-full hover:bg-[#3d3d3d] hover:text-[#fefefe] transition">
                <p className="font-bold lg:text-2xl text-sm">Pesan Sekarang!</p>
              </button>
            ) : (
              // Jika user belum login, button non-aktif
              <button disabled className="bg-gray-400 text-white lg:px-5 lg:py-3 px-3 py-1 rounded-full cursor-not-allowed">
                <p className="font-bold lg:text-2xl text-sm">Pesan Sekarang!</p>
              </button>
            )}
          </div>

          {/* Gambar Panah */}
          <div>
            <img src="/arrow-join.png" alt="arrow-join" width={100} height={100} className="hidden lg:block" />
            <img src="/arrow-join.png" alt="arrow-join" width={30} height={30} className="lg:hidden" />
          </div>
        </div>

        {/* Gambar Mbak */}
        <div>
          <img src="/mba.png" alt="mba" width={250} height={250} className="hidden lg:block" />
          <img src="/mba.png" alt="mba" width={100} height={100} className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};

JoinPage.propTypes = {
  user: PropTypes.object,
};

export default JoinPage;
