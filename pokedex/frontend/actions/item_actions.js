import * as APIUtil from '../util/api_util';
export const RECEIVE_POKEMON_ITEM = 'RECEIVE_POKEMON_ITEM';

export const receivePokemonItem = pokemonItem =>({
  type: RECEIVE_POKEMON_ITEM,
  pokemonItem
});

export const requestPokemonItem = (itemId, pokeId) => (dispatch) => {
  APIUtil.fetchPokemonItem(itemId, pokeId)
  .then(pokemonItem => dispatch(receivePokemonItem(pokemonItem)));
};
