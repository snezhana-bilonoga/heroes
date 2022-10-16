import { CREATE_HERO, GET_HEROES, REMOVE_HERO, EDIT_HERO} from '../types';

const initialState = {
  heroes: [],
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_HEROES:
    return {
      ...state,
      heroes: action.data,
    };
  case REMOVE_HERO:
    return {
      ...state,
      heroes: [...state.heroes.filter(hero => hero._id !== action.data._id)],
    };
  case EDIT_HERO:
    return {
      ...state,
      heroes: [...state.heroes.filter(hero => hero._id !== action.data._id), action.data],
    };
  case CREATE_HERO:
    return {
      ...state,
      heroes: action.data,
    };

  default:
    return state;
  }
};