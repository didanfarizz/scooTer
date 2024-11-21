// import React from 'react'

const HowToPage = () => {
  return (
    <div>
        <div className="flex lg:justify-center lg:items-center font-bold text-[#3d3d3d] text-2xl">
            <p style={{ fontFamily: 'Montserrat, sans-serif' }}>How To scooTer?</p>
        </div>
        <div className="lg:px-14 lg:py-9 lg:flex lg:flex-col lg:gap-y-9">
            <div className="flex justify-between items-center lg:gap-20">
                <div className="w-1/2 bg-[#3d3d3d] py-12 px-9 rounded-[30px] shadow-[6px_6px_2px_2px_rgba(0,0,0,1)]">
                    <img src="/login.png" alt="login" width={200} height={200}/>
                </div>
                <div className="w-1/2 bg-[#fefefe] py-12 px-9 rounded-[30px] shadow-[6px_6px_4px_2px_rgba(0,0,0,1)]">
                    <img src="/earth.png" alt="login" width={200} height={200}/>
                </div>
            </div>
            <div className="flex justify-between items-center lg:gap-20">
                <div className="w-1/2 bg-[#fefefe] py-12 px-9 rounded-[30px] shadow-[6px_6px_2px_2px_rgba(0,0,0,1)]">
                    <img src="/login.png" alt="login" width={200} height={200}/>
                </div>
                <div className="w-1/2 bg-[#3d3d3d] py-12 px-9 rounded-[30px] shadow-[6px_6px_4px_2px_rgba(0,0,0,1)]">
                    <img src="/earth.png" alt="login" width={200} height={200}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToPage