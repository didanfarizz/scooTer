import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from './useAuth';

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
