import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHeroes } from '../redux/actions';
import Carousel from './Carousel';
import Header from './Header';
import './Hero.css';

function Hero() {
  const params = useParams();
  const heroes = useSelector(state => state.heroes);
  const hero = heroes.find(hero => hero._id === params.id);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch, heroes]);

  return (
    <div>
      <Header/>
      {!hero || !hero.images || !hero.images.length ? (
        <div></div>
      ) : (
        <div className='hero'>
          <Carousel slides={hero.images} />
          <div className='content'>
            <h1>Nickname: {hero.nickname}</h1>
            <p>Real Name: {hero.real_name}</p>
            <p>Description: {hero.origin_description}</p>
            <p>Superpowers: {hero.superpowers}</p>
            <p>Catch phrase: {hero.catch_phrase}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
