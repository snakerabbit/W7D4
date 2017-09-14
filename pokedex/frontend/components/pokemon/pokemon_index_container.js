import { connect } from 'react-redux';

//needed curly braces for requestAllPokemon and selectAllPokemon
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

//needed to pass in state as an argument
const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  //needed to return a function
  requestAllPokemon: () => dispatch(requestAllPokemon)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
