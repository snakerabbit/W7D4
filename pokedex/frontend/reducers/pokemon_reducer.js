import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
    console.log(action.poke);
    console.log(action);
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
