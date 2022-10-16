import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroesList from './components/HeroesList';
import Hero from './components/Hero';
import AddHero from './components/AddHero';
import EditHero from './components/EditHero';
import './App.css';

function App() {
  return (
    <div className='App' width='device-width'>
      <Router>
        <Routes>
          <Route path='/' element={<HeroesList />} exact />
          <Route path='/hero/:id' element={<Hero />} exect />
          <Route path='/editHero/:id' element={<EditHero />} exect />
          <Route path='/addHero' element={<AddHero />} exect />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
