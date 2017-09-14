export const selectAllPokemon = (state) => {
  const stateArr = Object.values(state);
  const entity = Object.values(stateArr[0]);
  return Object.values(entity[0]);
  //return values(state.entities.pokemon);

};
