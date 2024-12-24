import React from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { SignedOut, SignInButton, SignedIn, UserButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function ScooterNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useUser(); // Mendapatkan data pengguna

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg-gap-x-2 gap-y-4 lg:gap-7">
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
    <Navbar className="sticky lg:top-4 top-0 z-50 mx-auto max-w-screen-xl lg:mt-4 px-6 py-2 lg:px-8 lg:py-4 bg-[#fefefe]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="/" className="mr-4 cursor-pointer py-1.5 font-medium -ml-6">
          <img src="/scoot-logo 1.png" alt="logo" width={130} height={0} />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-6">
          {/* Icon Lokasi */}
          <SignedIn>
            <Typography
              as="lokasi"
              href="#"
              variant="small"
              color="blue-gray"
              className="hidden lg:inline-block cursor-pointer"
            >
              <img src="/location.png" alt="lokasi" width={30} height={30} />
            </Typography>
          </SignedIn>

          {/* Icon Scooter */}
          <SignedIn>
            <Typography
              as="scooter"
              onClick={() => navigate('/rentals')}
              variant="small"
              color="blue-gray"
              className="hidden lg:inline-block cursor-pointer"
            >
              <img src="/scooter.png" alt="scooter" width={30} height={30} />
            </Typography>
          </SignedIn>

          {/* User Button */}
          <Button variant="gradient" size="sm" className="hidden lg:inline-block bg-transparent">
            <span style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-lg">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                {user?.emailAddresses.some((email) => email.verification.status === 'verified') ? (
                  <UserButton
                    signOutRedirectUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: { backgroundColor: 'transparent' },
                        userButtonAvatarImage: { borderRadius: '50%' },
                      },
                    }}
                  />
                ) : (
                  <div className="text-red-600 text-sm">
                    Please verify your email address.
                    <button
                      onClick={() => user?.emailAddresses[0]?.verification.start()}
                      className="ml-2 text-blue-600 underline"
                    >
                      Resend Verification
                    </button>
                  </div>
                )}
              </SignedIn>
            </span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
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
        <div className="container">
          {navList}
          <div className="flex flex-col gap-y-4 justify-center items-center mt-6">
            {/* Mobile Location Icon */}
            <SignedIn>
              <Typography as="scooter" href="#" className="flex justify-center items-center">
                <img src="/location.png" alt="location" width={25} height={25} className="cursor-pointer" />
              </Typography>
            </SignedIn>

            {/* Mobile Scooter Icon */}
            <SignedIn>
              <Typography as="scooter" onClick={() => navigate('/rentals')} className="cursor-pointer flex justify-center items-center">
                <img src="/scooter.png" alt="scooter" width={25} height={25} />
              </Typography>
            </SignedIn>

            {/* Mobile User Button */}
            <Button fullWidth variant="gradient" size="sm" className="bg-transparent flex justify-center items-center">
              <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton
                    signOutRedirectUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: { backgroundColor: 'transparent' },
                        userButtonAvatarImage: { borderRadius: '50%' },
                      },
                    }}
                  />
                </SignedIn>
              </span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
