import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome, MakeAuth } from '../factories/pages';
import { ThemeProvider } from '@emotion/react';
import './Routers.css'
import { Theme } from '../factories/themes/theme';
const Routers: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<MakeAuth />} />
          <Route path='/' element={<MakeHome />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routers;
