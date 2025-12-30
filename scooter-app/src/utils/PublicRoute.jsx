import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';
import PropTypes from 'prop-types';

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return null;
  }

  // Only redirect if the user is logged in and the current route is the login page
  if (user && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }

  return children;
}
