// components/Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../helper';

const PotoProfile = () => {
  const [image, setImage] = useState('');
  console.log(image);

  useEffect(() => {
    // Mendapatkan token dari local storage saat komponen dimuat
    const storedToken = localStorage.getItem('token');
    
    if (storedToken) {
      axios.get(`${API_URL}/account/getPhoto`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then(response => {
        const { success, result } = response.data;

        if (success) {
          // Mengatur URL gambar profil ke state 'image'
          setImage(`${API_URL}/${result.img}`);
        } else {
          console.error('Failed to get user photo:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error getting user photo:', error);
      });
    }
  }, []);

  return (
    <div>
      {/* Menampilkan gambar profil dalam elemen div */}
      <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', margin: 'auto' }}>
        <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Konten lainnya bisa ditambahkan di sini */}
    </div>
  );
};

export default PotoProfile;
