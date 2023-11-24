import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth'
import DashboardPage from './pages/dasboard/index'
import { Container } from '@chakra-ui/react'
import Register from './pages/Register/index'
import RegisterPromotor from '../src/pages/RegisterPromotor/index'
import TypeAccount from './pages/TypeAccount'
import { LOGIN_SUCCESS, LOGOUT } from './redux/reducer/type';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardPageLogin from './pages/dasboardLogin'
import ProfileUser from './pages/profileuser';
import ResetPasswordPage from './pages/resetPassword'
import DashboardPagePromotor from './pages/dashboardPromotor'
import PotoProfile from './pages/profileuser/potoProfile'

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Cek local storage saat komponen dimuat
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedToken = localStorage.getItem('token');

    if (storedUsername && storedPassword) {
      // Jika ada data login dalam local storage, simpan kembali status login
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          username: storedUsername,
          password: storedPassword,
          token : storedToken
        },
      });
    } else {
      // Jika tidak ada data login dalam local storage, logout pengguna
      dispatch({ type: LOGOUT });
       //navigate("/dash");
    }
  }, [dispatch]);

  


  return (

      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/dash' element={<DashboardPage />} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/RegisterPromotor' element={<RegisterPromotor/>} />
        <Route path='/TypeAccount' element={<TypeAccount/>} />
        <Route path='/dashboard' element={<DashboardPageLogin />} />
        <Route path='/ProfileUser' element={<ProfileUser />} />
        <Route path='/account/resetPassword/' element={<ResetPasswordPage />} />
        <Route path='/dashboardPromotor' element={<DashboardPagePromotor />} />
        <Route path='/poto' element={<PotoProfile />} />
      </Routes>
    
  )
};

export default App
