import React from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function ScooterNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg-gap-x-2 gap-y-4 lg:gap-7 animate__animated animate__bounceIn animate__delay-2s ">
      <Typography as="li" variant="small" color="blue-gray" className="flex items-center p-1 font-medium">
        <a style={{ fontFamily: 'Montserrat, sans-serif' }} href="#" className="flex items-center lg:text-lg text-[#3d3d3d]">
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="flex items-center p-1 font-medium">
        <a style={{ fontFamily: 'Montserrat, sans-serif' }} href="#" className="flex items-center lg:text-lg text-[#3d3d3d]">
          How to?
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="flex items-center p-1 font-medium">
        <a style={{ fontFamily: 'Montserrat, sans-serif' }} href="#" className="flex items-center lg:text-lg text-[#3d3d3d]">
          FAQ
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky lg:top-4 top-0 z-50 mx-auto max-w-screen-xl lg:mt-4 px-6 py-2 lg:px-8 lg:py-4 bg-[#fefefe] animate__animated animate__fadeInDown">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium -ml-6 animate__animated animate__bounceIn animate__delay-1s">
          <img src="/scoot-logo 1.png" alt="logo" width={130} height={0} />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-6 animate__animated animate__bounceIn animate__delay-3s">
          <Typography as="lokasi" href="#" variant="small" color="blue-gray" className="hidden lg:inline-block cursor-pointer">
            <img src="/location.png" alt="lokasi" width={30} height={30} />
          </Typography>
          <Link to={'/login'} variant="gradient" size="sm" className="hidden lg:inline-block bg-[#3d3d3d]">
            <span style={{ fontFamily: 'Montserrat, sans-serif' }} className='text-lg'>Login</span>
          </Link>
        </div>
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden animate__animated animate__bounceIn animate__delay-2s" ripple={false} onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="gap-y-4">
            <Typography as="lokasi" href="#" variant="small" color="blue-gray" className="mb-4 lg:hidden inline-block cursor-pointer">
              <img src="/location.png" alt="lokasi" width={20} height={20} />
            </Typography>
            <Button fullWidth variant="gradient" size="sm" className="bg-[#3d3d3d]">
              <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Login</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
