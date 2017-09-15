export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  });
};

export const fetchSinglePokemon = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`
  });
};

export const fetchPokemonItem = (itemId, pokeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokeId}/items/${itemId}`
  });
};
