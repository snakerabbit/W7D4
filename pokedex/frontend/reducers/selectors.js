import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const stateArr = Object.values(state);
  const entity = Object.values(stateArr[0]);
  return Object.values(entity[0]);

};

export const selectSinglePokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectPokemonItem = (state, itemId) =>{
  return values(state.entities.pokemon.items[itemId]);
};
