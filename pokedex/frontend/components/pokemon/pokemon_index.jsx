import React from 'react';

class PokemonIndex extends React.Component {
  //no constructor needed
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    //const {pokemon} = this.props;
    return (
      <div>
        <ul>
          {this.props}
          //need to create a PokemonIndexItem
          //{pokemon.map(poke => <PokemonIndexItem key= {poke.id} pokemon={poke}/>)}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
