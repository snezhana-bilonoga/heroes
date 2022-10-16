import { GET_HEROES, REMOVE_HERO, CREATE_HERO, EDIT_HERO } from './types';

const apiPrefix = process.env.REACT_APP_API_PREFIX; 

export function getHeroes () {
  return async dispatch => {
    const response = await fetch(`${apiPrefix}/api/heroes`, {
      method: 'GET', 
    });
     
    const jsonData = await response.json();
    const updatedJsonData = jsonData.map(data => ({...data, images: data.images.map(image => `${apiPrefix}/${image}`)})).reverse();
  
    dispatch({
      type: GET_HEROES,
      data: updatedJsonData,
    });
  };
}

export function removeHero (id) {
  return async dispatch => {
    const response = await fetch(`${apiPrefix}/api/heroes/` + id, {
      method: 'DELETE', 
    });
     
    const jsonData = await response.json();
  
    dispatch({
      type: REMOVE_HERO,
      data: jsonData,
    });
  };
}

export function editHero (hero) {
  return async dispatch => {
    const formData = new FormData();
    formData.append('_id', hero._id);
    formData.append('nickname', hero.nickname);
    formData.append('real_name', hero.real_name);
    formData.append('description', hero.description);
    formData.append('superpowers', hero.superpowers);
    formData.append('catch_phrase', hero.catch_phrase);
    hero.images.forEach((image, index) => {
      formData.append(`file${index}`, image);
    });
    const response = await fetch(`${apiPrefix}/api/heroes`, {
      method: 'PUT', 
      body: formData
    });
     
    const jsonData = await response.json();
  
    dispatch({
      type: EDIT_HERO,
      data: jsonData,
    });
  };
}

export function createHero (hero) {
  return async dispatch => {
    const formData = new FormData();
    formData.append('nickname', hero.nickname);
    formData.append('real_name', hero.real_name);
    formData.append('description', hero.description);
    formData.append('superpowers', hero.superpowers);
    formData.append('catch_phrase', hero.catch_phrase);
    hero.images.forEach((image, index) => {
      formData.append(`file${index}`, image);
    });
    const response = await fetch(`${apiPrefix}/api/heroes`, {
      method: 'POST', 
      body: formData
    });
     
    const jsonData = await response.json();
  
    dispatch({
      type: CREATE_HERO,
      data: jsonData,
    });
  };
}