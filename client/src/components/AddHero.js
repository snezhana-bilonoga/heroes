import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createHero } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Form.css';

function AddHero () {
  const [nickname, setNickname] = useState('');
  const [real_name, setRealName] = useState('');
  const [description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatchPhrase] = useState('');
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick () {
    dispatch(
      createHero({
        nickname,
        real_name,
        description,
        superpowers,
        catch_phrase,
        images
      })
    );
    navigate('/');
  }

  return (
    <div>
      <Header />
      <div className='hero'>
        <form className='content'>
          <label>
            Nickname <span className='required'>*</span>
          </label>
          <input
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            type='text'
          />
          <label>Real name</label>
          <input
            value={real_name}
            onChange={e => setRealName(e.target.value)}
            type='text'
          />
          <label>Description</label>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            type='text'
          />
          <label>Superpowers</label>
          <input
            value={superpowers}
            onChange={e => setSuperpowers(e.target.value)}
            type='text'
          />
          <label>Catch phrase</label>
          <input
            value={catch_phrase}
            onChange={e => setCatchPhrase(e.target.value)}
            type='text'
          />
          <label>
            Images <span className='required'>*</span>
          </label>
          <input
            multiple
            accept='image/*'
            onChange={e => setImages([...e.target.files])}
            type='file'
          />
          <button
            disabled={!nickname || !images || !images.length}
            onClick={handleClick}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHero;
