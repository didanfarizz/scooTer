import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

VisitorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const VisitorContext = createContext({ visitorId: null, loading: true, error: null, refresh: () => {} });

export default function VisitorProvider({ children }) {
  const [visitorId, setVisitorId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  const fetchVisitor = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:1000/api/cookie/visitor', { withCredentials: true, timeout: 5000 });
      setVisitorId(res.data?.visitor_id || null);
    } catch (err) {
      const msg = (err && err.message) || 'Network Error';
      console.error('Visitor fetch error:', msg);
      setVisitorId(null);
      setError(msg);
      // schedule a retry (exponential backoff), up to 3 attempts
      if (attempt < 3) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s...
        setTimeout(() => setAttempt((a) => a + 1), delay);
      }
    } finally {
      setLoading(false);
    }
  }, [attempt]);

  useEffect(() => {
    fetchVisitor();
  }, [fetchVisitor]);

  return <VisitorContext.Provider value={{ visitorId, loading, error, refresh: () => setAttempt((a) => a + 1) }}>{children}</VisitorContext.Provider>;
}

export function useVisitor() {
  return useContext(VisitorContext);
}
