import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome, MakeAuth, MakeProduct } from '../factories/pages';
import { ThemeProvider } from '@emotion/react';
import './Routers.css'
import { Theme } from '../factories/themes/theme';
const Routers: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MakeHome />} />
          <Route path='/auth' element={<MakeAuth />} />
          <Route path='/products' />
          <Route path='/products/:id' element={<MakeProduct />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routers;
