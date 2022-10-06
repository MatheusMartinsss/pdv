import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome } from './factories/';
const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
