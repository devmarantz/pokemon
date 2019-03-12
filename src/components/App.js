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

  updateTeam = () => {
    if (this.state.myTeam.length < 6) {
      let flag = true;
      this.state.myTeam.forEach(pokemon => {
        if (pokemon.name === this.state.pokemon.name) {
          alert('sorry cant add') 
          flag = false; 
        } 
      }) 
      if (flag) {
        this.setState(prevState => {
          const updateTeam = prevState.myTeam; 
          updateTeam.push(this.state.pokemon);
          // myTeam: this.state.myTeam.push(this.state.pokemon) 
        return { myTeam: updateTeam }
        }) 
      }
    } else {
      // need to remove pokemon
      alert('Team Full!')
    }
  }

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
        <PokemonInfo pokemon={this.state.pokemon} updateTeam={this.updateTeam}/>
      </div>
    );
  }
}

export default App;
