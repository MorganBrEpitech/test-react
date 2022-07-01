import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Produits from './pages/Produits';
import Visiteurs from './pages/Visiteurs';
import Clics from './pages/Clics';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/produits" element={<Produits /> } />
          <Route path="/visiteurs" element={<Visiteurs /> } />
          <Route path="/clics" element={<Clics /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;