import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';

function ScooterNavbar({ user }) {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center gap-y-4 lg:gap-7">
      <Typography as="li" className="font-medium">
        <span
          onClick={() => navigate('/#about')}
          className="cursor-pointer lg:text-lg text-[#3d3d3d]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          About
        </span>
      </Typography>
      <Typography as="li" className="font-medium">
        <span
          onClick={() => navigate('/#howto')}
          className="cursor-pointer lg:text-lg text-[#3d3d3d]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          How to?
        </span>
      </Typography>
      <Typography as="li" className="font-medium">
        <span
          onClick={() => navigate('/#faq')}
          className="cursor-pointer lg:text-lg text-[#3d3d3d]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          FAQ
        </span>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 lg:top-4 z-50 mx-auto max-w-screen-xl lg:mt-4 px-6 py-2 lg:px-8 lg:py-4 bg-[#fefefe]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Typography
          as="div"
          className="cursor-pointer py-1.5 font-medium -ml-6"
          onClick={() => navigate('/')}
        >
          <img src="/scoot-logo 1.png" alt="logo" width={130} />
        </Typography>

        {/* Desktop Menu */}
        <div className="hidden lg:block">{navList}</div>

        {/* Right Actions */}
        <div className="flex items-center gap-x-6">
          {/* Location Icon */}
          {user && (
            <img
              src="/location.png"
              alt="location"
              width={30}
              height={30}
              className="hidden lg:inline-block cursor-pointer"
              onClick={() => navigate('/maps')}
            />
          )}

          {/* Scooter Icon */}
          {user && (
            <img
              src="/scooter.png"
              alt="scooter"
              width={30}
              height={30}
              className="hidden lg:inline-block cursor-pointer"
              onClick={() => navigate('/rentals')}
            />
          )}

          {/* Auth Button */}
          {!user ? (
            <Button
              variant="text"
              size="sm"
              onClick={() => navigate('/login')}
              className="hidden lg:inline-block text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Sign In
            </Button>
          ) : (
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-sm text-gray-700">
                {user.email}
              </span>
              <Button
                variant="text"
                size="sm"
                onClick={handleLogout}
                className="text-red-600"
              >
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={openNav}>
        <div className="container mt-4">
          {navList}

          <div className="flex flex-col gap-y-4 mt-6 items-center">
            {user && (
              <img
                src="/location.png"
                alt="location"
                width={25}
                className="cursor-pointer"
                onClick={() => navigate('/maps')}
              />
            )}

            {user && (
              <img
                src="/scooter.png"
                alt="scooter"
                width={25}
                className="cursor-pointer"
                onClick={() => navigate('/rentals')}
              />
            )}

            {!user ? (
              <Button
                fullWidth
                variant="text"
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
            ) : (
              <Button
                fullWidth
                variant="text"
                onClick={handleLogout}
                className="text-red-600"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

ScooterNavbar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

export default ScooterNavbar;
