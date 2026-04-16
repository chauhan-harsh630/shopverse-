import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Note: Backend might need a /auth/me route to fetch user profile using token.
  // We'll temporarily mock user name parsing from a JWT or skip loading until /me exists.
  useEffect(() => {
    // If backend doesn't have /api/auth/me yet, we just store token
    if (token) {
      setUser({ name: 'Logged In User', email: '' }); 
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      const receivedToken = response.data.token || response.data;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      // Backend returns name and email along with token usually 
      setUser({ name: response.data.name || 'User', email });
    } catch (error) {
      console.error("Login Error: ", error.response?.data?.message || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/register', { name, email, password });
      // Depending on backend, might return a token directly on register, if not we could push to login.
      if (response.data.token) {
         setToken(response.data.token);
         localStorage.setItem('token', response.data.token);
         setUser({ name, email });
      }
    } catch (error) {
      console.error("Register Error: ", error.response?.data?.message || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
