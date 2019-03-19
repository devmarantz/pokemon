import React, { Component } from 'react';
import base from '../base';
import API from '../API';
import SearchPokemon from './SearchPokemon';
import PokemonInfo from './PokemonInfo';
import MyTeam from './MyTeam';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      myTeam: []   
    }
  }

  componentDidMount = () => {
    this.ref = base.syncState('myTeam', {
      context: this,
      state: 'myTeam'
    })
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
        return { myTeam: updateTeam }
        }) 
      }
    } else {
      // need to remove pokemon
      alert('Team Full!')
    }
  }

  removePokemonFromTeam = idx => {
    this.setState(prevState => {
      prevState.myTeam.splice(idx, 1);
      const updateTeam = prevState.myTeam
    return { myTeam: updateTeam }
    })  
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
          <span id="bigCircle">
            <span id="bigInner"></span>
            <span id="bigInner2"></span>
          </span>
          <span id="littleCircle1"></span>
          <span id="littleCircle2"></span>
          <span id="littleCircle3"></span>
          <span id="headerCutout"></span>
        </header>
        <SearchPokemon pokemon={this.state.pokemon} onSearch={this.handleSearchFunction} />
        <PokemonInfo pokemon={this.state.pokemon} updateTeam={this.updateTeam}/>
        <MyTeam myteam={this.state.myTeam} removePokemonFromTeam={this.removePokemonFromTeam} />
      </div>
    );
  }
}

export default App;
