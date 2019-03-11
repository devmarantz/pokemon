import React, { Component } from 'react';
import '../css/App.css';
import SearchPokemon from './SearchPokemon';
import PokemonInfo from './PokemonInfo';
import API from '../API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      myTeam: []   
    }
  }
  /**
   * lifecycle component did mount to setState
  */
  // componentDidMount() {
  //   API.getAllPokemon().then(res => console.log(res.data))
  // }

  // get pokemon information

  handleSearchFunction = searchText => {
    API.findPokemon(searchText).then(res => this.setState({pokemon: res.data}))
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Pokedex</p>
        </header>
        <SearchPokemon pokemon={this.state.pokemon} onSearch={this.handleSearchFunction} />
        <PokemonInfo pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
