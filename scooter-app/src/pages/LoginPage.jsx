// import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};

export default LoginPage;
