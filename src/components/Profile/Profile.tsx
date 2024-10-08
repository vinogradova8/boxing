/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import './Profile.scss';
import { ItemsContext } from '../../ItemsContext';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NotFoundPage } from '../NotFoundPage';
// import { User } from '../../types/User';
// import { getUser } from '../../api/fetchClient';

export const Profile: React.FC = ({}) => {
  const [logoutErrorMessage, setLogoutErrorMessage] = useState(false);

  const {
    user,
    setUser,
    accessToken,
    setAccessToken,
    refreshErrorMessage,
    setRefreshErrorMessage,
  } = useContext(ItemsContext);
  const { t } = useTranslation();

  // const { firstName, lastName } = user;

  const navigate = useNavigate();

  // const refreshToken = useCallback(async () => {
  //   try {
  //     const response = await axios.post(
  //       '/auth/refresh',
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Access-Control-Allow-Origin': 'http://localhost:3000',
  //         },
  //       },
  //     );

  //     setAccessToken(response.data.token);
  //   } catch {
  //     setRefreshErrorMessage(true);
  //   }
  // }, [accessToken, setAccessToken, setRefreshErrorMessage]);

  // useEffect(() => {
  //   const refreshTokenInterval = setInterval(() => {
  //     refreshToken();
  //   }, 180000);

  //   return () => {
  //     clearInterval(refreshTokenInterval);
  //   };
  // }, [refreshToken]);

  const handleLogOut = async () => {
    try {
      await axios.post(
        '/auth/logout',
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      setAccessToken('');
      setUser(null);
      setRefreshErrorMessage(false);
      navigate('/login');
    } catch {
      setLogoutErrorMessage(true);
    }
  };

  // function getCookie(name: string): string | null {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);

  //   if (parts.length === 2) {
  //     return parts.pop()?.split(';').shift() || null;
  //   }

  //   return null;
  // }

  // useEffect(() => {
  //   const access: string | null = getCookie('accessToken');

  //   console.log('Access Token:', access);
  // }, []);

  const getUser = async (acc: string) => {
    try {
      const response = await axios.get('/users/me', {
        headers: { Authorization: `Bearer ${acc}` },
      });

      const role = response.data.role;
      const id = response.data.id;
      const firstName = response.data.firstName;
      const lastName = response.data.lastName;
      const email = response.data.email;
      const password = response.data.password;

      setUser({ id, email, firstName, lastName, role, password });
    } catch {
      console.log('error');
    }
  };

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }

    return null;
  }

  useEffect(() => {
    const access: string | null = getCookie('accessToken');

    if (access && !accessToken) {
      setAccessToken(access);
      getUser(access);
    }

    console.log('Access Token:', access);
  }, []);

  return (
    <>
      {refreshErrorMessage ? (
        <NotFoundPage message="Something went wrong" />
      ) : (
        <main className="profile">
          <h2 className="profile__title">Hey, champ!</h2>

          <div className="profile__container">
            <p className="profile__text">
              {`${user?.firstName} ${user?.lastName}, раді вітати тебе у нашій команді! 
							Наразі особистий кабінет не має додаткових ф-цій але ми постійно розвиваємося і у
              майбутньому вони з'являться!`}
            </p>
            <button
              className="logout-button admin-button"
              onClick={handleLogOut}
            >
              {t('Log out')}
            </button>
            {logoutErrorMessage && (
              <p className="error">{t('Log out failed!')}</p>
            )}
          </div>
        </main>
      )}
    </>
  );
};
