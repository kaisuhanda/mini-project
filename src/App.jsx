
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth/index'
import { Container } from '@chakra-ui/react'
import Register from './pages/Register/index'
import RegisterPromotor from '../src/pages/RegisterPromotor/index'
import TypeAccount from './pages/TypeAccount'
import { LOGIN_SUCCESS, LOGOUT } from './redux/reducer/type';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import DashboardPageLogin from './pages/dasboardLogin'
import ProfileUser from './pages/profileuser';
import ResetPasswordPage from './pages/resetPassword'
// import DashboardPagePromotor from './pages/dashboardPromotor'
import PotoProfile from './pages/profileuser/potoProfile'
import DashboardPage from "./pages/dashboard"
import EventPage from "./pages/event"
import EventDetails from "./pages/eventDetails"
import NotFoundPage from "./pages/404"
import CreateEvent from './pages/CreateEvent'
import UpdateEvent from './pages/UpdateEvent'
import ManageEventPage from "./pages/ManageEvents"
import { keepLogin } from './redux/reducer/accountReducer'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Cek local storage saat komponen dimuat
    // const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      // Jika ada data login dalam local storage, simpan kembali status login
      dispatch(keepLogin());
    } else {
      // Jika tidak ada data login dalam local storage, logout pengguna
      dispatch({ type: LOGOUT });
      //navigate("/dash");
    }
  }, [dispatch]);


  return (

    <Routes>
      {/* bagian e adi */}
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/RegisterPromotor' element={<RegisterPromotor />} />
      <Route path='/TypeAccount' element={<TypeAccount />} />
      <Route path='/ProfileUser' element={<ProfileUser />} />
      <Route path='/account/resetPassword/' element={<ResetPasswordPage />} />
      <Route path='/poto' element={<PotoProfile />} />

      {/* bagian e kai */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/event-details/:event_id" element={<EventDetails />} />

      {/* bagian e khalid */}
      <Route path='/dashboard' element={<ManageEventPage />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path='/update-event/:event_id' element={<UpdateEvent />} />
      {/* umum */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  )
};



export default App
