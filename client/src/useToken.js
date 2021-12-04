import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString;
    if (userToken) {return true;}
    else {return false;}
  };
  const [token, setToken] = useState(getToken());
  const saveToken = userToken => {
    sessionStorage.setItem('token', userToken);
    setToken(true);
  };
  return {
    setToken: saveToken,
    token
  }
}
