// File Name: App.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025


import './App.css'
import MainRouter from './MainRouter'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

function App() {
  const getUserFromStorage = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return token && user ? { user } : null;
  };

  const [user, setUser] = useState(getUserFromStorage());

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <MainRouter user={user} handleLogout={handleLogout} setUser={setUser} />
  );
}

export default App;
