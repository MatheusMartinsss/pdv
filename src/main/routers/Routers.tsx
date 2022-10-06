import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome, MakeAuth } from '../factories/pages';
const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<MakeAuth />} />
        <Route path='/' element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
