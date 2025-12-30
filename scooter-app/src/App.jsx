import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './utils/firebaseConfig';

import ScooterNavbar from './components/navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RentalsPage from './pages/RentalsPage';
import PaymentPage from './pages/PaymentPage';
import Maps from './components/maps';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <Router>
      <ScooterNavbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rentals" element={<RentalsPage user={user} />} />
        <Route path="/payment" element={<PaymentPage user={user} />} />
        <Route path="/maps" element={<Maps user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
