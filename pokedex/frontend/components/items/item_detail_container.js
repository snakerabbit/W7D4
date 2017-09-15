import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from'./item_detail';
import {selectPokemonItem} from '../../reducers/selectors';

const mapStateToProps = (state, { match }) =>({
  // happiness: state.happiness,
  // name: state.name,
  // price: state.price,
  // imageUrl: state.image_url,
  // pokemonId: state.pokemon_id,
  // item: selectPokemonItem(state, ownProps.match.params.itemId)
  item: selectPokemonItem(state, parseInt(match.params.itemId))
});

// const mapDispatchToProps = dispatch =>({
//   requestPokemonItem: (itemId, pokemonId) =>
//     dispatch(requestPokemonItem(itemId, pokemonId))
//
// });

export default connect(mapStateToProps)(ItemDetail);
