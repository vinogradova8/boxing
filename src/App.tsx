import React, { useCallback, useContext, useEffect } from 'react';
import './App.scss';
import './i18n';
import { Header } from './components/Header';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { ItemsContext } from './ItemsContext';
import axios from './api/axios';

export const App: React.FC = () => {
  const { currentId } = useParams();

  const { accessToken, setAccessToken, setRefreshErrorMessage, setUser } =
    useContext(ItemsContext);

  const refreshToken = useCallback(async () => {
    try {
      const response = await axios.post(
        '/auth/refresh',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      setAccessToken(response.data.token);
    } catch {
      setRefreshErrorMessage(true);
    }
  }, [accessToken, setAccessToken, setRefreshErrorMessage]);

  useEffect(() => {
    let refreshTokenInterval: NodeJS.Timer;

    if (accessToken) {
      refreshTokenInterval = setInterval(() => {
        refreshToken();
      }, 180000);
    }

    return () => {
      clearInterval(refreshTokenInterval);
    };
  }, [
    accessToken,
    refreshToken,
    setAccessToken,
    setRefreshErrorMessage,
    setUser,
  ]);

  if (currentId === 'home') {
    return <Navigate to=".." />;
  }

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
