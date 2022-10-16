import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editHero, getHeroes } from '../redux/actions';
import Header from './Header';
import './Form.css';

function EditHero () {
  const params = useParams();
  const heroes = useSelector(state => state.heroes);
  const hero = heroes.find(hero => hero._id === params.id);

  const [nickname, setNickname] = useState(hero.nickname);
  const [real_name, setRealName] = useState(hero.real_name);
  const [description, setDescription] = useState(hero.description);
  const [superpowers, setSuperpowers] = useState(hero.superpowers);
  const [catch_phrase, setCatchPhrase] = useState(hero.catch_phrase);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(editHero({ _id: hero._id, nickname, real_name, description, superpowers, catch_phrase, images}));
    navigate(`/hero/${hero._id}`);
  }

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  return (
    <div>
      <Header/>
      {!hero ? (
        <div></div>
      ) : (
        <div className='hero'>
          <div className='content'>
            <input
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              type='text'
              placeholder='Nickname'
            />
            <input
              value={real_name}
              onChange={e => setRealName(e.target.value)}
              type='text'
              placeholder='Real name'
            />
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              type='text'
              placeholder='Description'
            />
            <input
              value={superpowers}
              onChange={e => setSuperpowers(e.target.value)}
              type='text'
              placeholder='Superpowers'
            />
            <input
              value={catch_phrase}
              onChange={e => setCatchPhrase(e.target.value)}
              type='text'
              placeholder='Catch phrase'
            />
            <input
              multiple
              accept='image/*'
              onChange={e => setImages([...e.target.files])}
              type='file'
            />
            <button onClick={handleClick}>Save</button>
          </div>
        </div> )}
    </div>
  );
}

export default EditHero;