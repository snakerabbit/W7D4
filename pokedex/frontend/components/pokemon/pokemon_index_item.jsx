import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) =>{
  return(
    <div>
      <li key={pokemon.id}>
        <Link to={`/pokemon/${pokemon.id}`}>
          <img src={pokemon.image_url}/>
          {pokemon.name}
        </Link>
      </li>
    </div>
  );
};


export default PokemonIndexItem;
