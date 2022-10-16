import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHeroes, removeHero} from '../redux/actions';
import Header from './Header';
import './HeroesList.css';

function HeroesList() {
  const dataLimit = 5;
  const heroes = useSelector(state => state.heroes);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
    setPages(Math.ceil(heroes.length / dataLimit));
  }, [dispatch, heroes, heroes.length]);

  const deleteButton = hero => {
    if (heroes.some(deletedHero => deletedHero.id === hero.id)) {
      return (
        <button onClick={() => dispatch(removeHero(hero._id))} className='delete'>
            🗑
        </button>
      );
    }
  };

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  const getPaginatedData = (data) => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  return (
    <>
      <Header />
      {!heroes || !heroes.length ? <div>No Heroes</div> : 
        <div className='hero-list'>
          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
             🠐 prev
            </button>
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
             next 🠒
            </button>
          </div> 
          <div>
            {getPaginatedData(heroes).map((hero, idx) => (
              <div key={idx} className='dataContainer'>
                <div className='info-item'>
                  <h2>{hero.nickname}</h2>
                  <div className='operation'>
                    {deleteButton(hero)}  
                    <button className='edit'>
                      <Link to={`/editHero/${hero._id}`}>
                         🖉
                      </Link>
                    </button>
                  </div>   
                </div>
                <img src={hero.images[0]} alt='hero'></img>
                <button className='details'>
                  <Link to={`/hero/${hero._id}`}>
                         More Details
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>}
    </>
  );
}


export default HeroesList;