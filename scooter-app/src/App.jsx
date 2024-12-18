import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RentalsPage from './pages/RentalsPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path='/payment' element={<PaymentPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
