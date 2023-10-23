// useTokenChecker.js
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../contexts/NotificationContext';


const useTokenChecker = (token: string | null) => {
  const showNotification = useNotification();
  const navigate = useNavigate();

  const checkToken = useCallback(() => {
    if (!token) {
      showNotification('warning', 'Unauthorized', 'Login first m8');
      navigate('/login');
    }
  }, [token, showNotification, navigate]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);
};

export default useTokenChecker;
