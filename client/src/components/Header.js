import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header () {
  const navigate = useNavigate();

  return (
    <>
      <header className='header'>
        <button onClick={() => navigate('/')} className='home'>
          Hero List
        </button>
        <button onClick={() => navigate('/addHero')} className='add-hero'>
          Add Hero
        </button>
      </header>
      <hr />
    </>
  );
}
export default Header;
