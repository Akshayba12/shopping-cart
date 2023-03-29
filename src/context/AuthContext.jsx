import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import axiosInstance from '../util/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setuser(JSON.parse(token));
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      console.log(actions);
      const { confirmpassword, ...rest } = values;
      const res = await axiosInstance.post(
        'register',
        rest,
      );
      localStorage.setItem('token', JSON.stringify(res.data));
      setuser(res.data);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  });

  const login = useCallback(async (values, actions) => {
    try {
      console.log(actions);
      const { rememberme, ...rest } = values;
      const res = await axiosInstance.post('login', rest);
      localStorage.setItem(
        'token',
        JSON.stringify(res.data),
      );
      setuser(res.data);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  });

  const logout = useCallback(() => {
    localStorage.clear();
    setuser(null);
  }, []);

  const value = useMemo(
    () => ({
      register, login, logout, user,
    }),
    [register, login, logout, user],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
