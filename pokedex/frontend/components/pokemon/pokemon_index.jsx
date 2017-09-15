import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Route} from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';


class PokemonIndex extends React.Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    return (
      <ul>
        {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}></Route>
      </ul>
    );
  }
}

export default PokemonIndex;
