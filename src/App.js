// src/App.js
import React from 'react';
import AppRoutes from './routes/AppRoutes'; // uses useRoutes inside
import Navbar from './components/Navbar'; // optional

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
