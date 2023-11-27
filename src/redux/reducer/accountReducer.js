import { LOGIN_SUCCESS, LOGOUT } from "./type";
import axios from 'axios';
import { API_URL } from "../../../helper";


// Tambahkan action creator untuk login success
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const logout = () => {
  // Hapus item localStorage di sini
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  localStorage.removeItem("token");

  // Kembalikan action type LOGOUT
  return { type: LOGOUT };
};

const INITIAL_STATE = {
  username: "",
  password: "",
  token: "",
  isAuthenticated: false,
  phone: "",
  img: "",
  email: "",
  role:"",
};

export const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...INITIAL_STATE, isAuthenticated: false , };
    default:
      return state;
  }
};


export const login = (usernameOrEmail, password, navigate, setErrorMessage) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/account/login`, {
      usernameOrEmail,
      password,
    });

    const { success, result, message } = response.data;

    if (success) {
      // Menggunakan action creator loginSuccess untuk mengirim aksi LOGIN_SUCCESS
      dispatch(loginSuccess(result));
      localStorage.setItem('img', result.img);
      localStorage.setItem('token', result.token);

      // Memanggil fungsi keepLogin setelah berhasil login
      await dispatch(keepLogin());

      // Update the navigation based on the user's role
      if (result.role === 'user') {
        navigate('/');
      } else if (result.role === 'promoter') {
        navigate('/dashboard');
      } else {
        // Redirect other roles to the root page
        navigate('/auth');
      }
    } else {
      setErrorMessage(`Login failed: ${message}`);
    }
  } catch (error) {
    console.error('Error during login:', error);
    setErrorMessage('Email atau username atau password salah.');
  }
};






export const decodeToken = (token) => {
  if (token) {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  }
  return null;
};

export const keepLogin = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Stored Token:", token);

    if (!token) {
      console.error('Token tidak tersedia atau kosong.');
      return;
    }


    if (!token) {
      console.error('Token Redux tidak tersedia atau kosong.');
      return;
    }

    // Kirim token ke server untuk verifikasi melalui headers
    const response = await axios.post(
      `${API_URL}/account/keeplogin`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const img = localStorage.getItem('img');
    if (!img) {
      console.error('Data gambar tidak tersedia di localStorage.');
      return;
    }

    // Lakukan sesuatu setelah verifikasi berhasil (misalnya, set data pengguna)
    const { success, result } = response.data;
    if (success) {
      console.log('berhasil keep login');
      localStorage.setItem('token', result.token);
      const decodedToken = decodeToken(result.token);

      dispatch(loginSuccess({
        ...result,
        ...decodedToken,
        img, 
      }));
    }
  } catch (error) {
    console.error('Error during keepLogin:', error);
    // Handle error appropriately
  }
};
