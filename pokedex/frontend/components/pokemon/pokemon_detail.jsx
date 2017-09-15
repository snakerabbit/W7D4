import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }
  render (){
    let {item} = this.props;
    return (
      <div>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer}></Route>
      </div>
  );
  }
}

export default PokemonDetail;
