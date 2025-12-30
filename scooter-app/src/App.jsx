import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RentalsPage from './pages/RentalsPage';
import PaymentPage from './pages/PaymentPage';
import Maps from './components/maps';
import ProfilePage from './pages/ProfilePage';
import PublicRoute from './utils/PublicRoute.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* LOGIN: hanya untuk user belum login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/rentals"
          element={
            <PrivateRoute>
              <RentalsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/maps"
          element={
            <PrivateRoute>
              <Maps />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
