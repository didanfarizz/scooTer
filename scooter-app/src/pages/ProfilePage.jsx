import useAuth from '../utils/useAuth';
import ScooterNavbar from '../components/navbar';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="">
      <ScooterNavbar />
      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-gray-600">Name</p>
          <p className="font-medium mb-4">{user?.displayName || user?.email || '-'}</p>

          <p className="text-sm text-gray-600">Email</p>
          <p className="font-medium mb-4">{user?.email || '-'}</p>

          <p className="text-sm text-gray-600">Joined</p>
          <p className="font-medium mb-4">{user?.metadata?.creationTime || '-'}</p>
        </div>
      </div>
    </div>
  );
}
