import { useUser } from '@clerk/clerk-react';
import ScooterNavbar from '../components/navbar';
import FooterPage from '../components/footer';
import { Button } from '@material-tailwind/react';
export default function RentalsPage() {
  const { user } = useUser(); // Mendapatkan informasi user

  return (
    <div className="">
      <div className="">
        <ScooterNavbar />
      </div>
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
          <div className="flex flex-col items-center">
            <img src={'/user.png'} alt="User Avatar" width={263} height={259} className="" />
            <h2 className="mt-4 text-xl font-semibold">{user?.fullName || 'User'}</h2>
            <p className="text-sm text-red-500 mt-1">Inactive</p>
            <p className="text-gray-500 mt-4">Durasi waktu: -</p>
            <Button className="mt-6 px-4 py-2 bg-gray-300 text-black rounded-md">
              Pesan
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <FooterPage />
      </div>
    </div>
  );
}
