import React from 'react';
import { Navbar, Collapse, Typography, Button, IconButton, Menu, MenuHandler, MenuList, MenuItem, Avatar, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import useAuth from '../utils/useAuth';

export default function ScooterNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  React.useEffect(() => {
    const resize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setOpenLogoutDialog(false);
    navigate('/');
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:gap-10 lg:text-2xl lg:flex-row lg:items-center text-black">
      <Typography as="li" className="cursor-pointer hover:text-gray-400">
        About
      </Typography>
      <Typography as="li" className="cursor-pointer hover:text-gray-400">
        How to?
      </Typography>
      <Typography as="li" className="cursor-pointer hover:text-gray-400">
        Product
      </Typography>
      <Typography as="li" className="cursor-pointer hover:text-gray-400">
        FAQ
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-6 my-6 z-50 mx-auto max-w-screen-xl px-6 py-3">
        <div className="flex items-center justify-between">
          <img src="/scoot-logo 1.png" alt="logo" width={130} className="cursor-pointer" onClick={() => navigate('/')} />

          <div className="hidden lg:block">{navList}</div>

          <div className="flex items-center gap-4">
            {user && (
              <>
                <img src="/location.png" width={26} className="cursor-pointer" onClick={() => navigate('/maps')} />
                <img src="/scooter.png" width={26} className="cursor-pointer" onClick={() => navigate('/rentals')} />
              </>
            )}

            {!user ? (
              <Button size="sm" onClick={() => navigate('/login')}>
                Sign In
              </Button>
            ) : (
              <Menu placement="bottom-end">
                <MenuHandler>
                  <Avatar size="sm" src={user?.photoURL} alt={user?.displayName || user?.email} className="cursor-pointer" />
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                  <MenuItem onClick={() => setOpenLogoutDialog(true)}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </div>

          <IconButton variant="text" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            ☰
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <div className="mt-4">{navList}</div>

          <div className="mt-4 flex flex-col gap-2">
            {!user ? (
              <Button fullWidth onClick={() => navigate('/login')}>
                Sign In
              </Button>
            ) : (
              <>
                <Button fullWidth onClick={() => navigate('/profile')}>
                  Profile
                </Button>
                <Button fullWidth color="red" onClick={() => setOpenLogoutDialog(true)}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>

      <Dialog open={openLogoutDialog} handler={() => setOpenLogoutDialog(false)}>
        <DialogHeader>Confirm Logout</DialogHeader>
        <DialogBody divider>Are you sure you want to logout?</DialogBody>
        <DialogFooter>
          <Button variant="text" color="gray" onClick={() => setOpenLogoutDialog(false)}>
            Cancel
          </Button>
          <Button color="red" onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
