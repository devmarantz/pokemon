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
    base.syncState('myTeam', {
      context: this,
      state: 'myTeam',
      asArray: true
    })
  }

  updateTeam = () => {
    if (this.state.myTeam.length <= 6) {
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
          // add movesList to pokemon object before pushing
          updateTeam.push(this.state.pokemon);
          updateTeam.map(pokemon => {
            if (!this.state.pokemon.selectedMoves) {
              pokemon.selectedMoves = pokemon.moves.splice(0,4)
            } 
          })
          return { myTeam: updateTeam }
        })
      } 
    } else if (this.state.myTeam.length === 0) {
        this.setState({myTeam: this.state.myTeam.push(this.state.pokemon) })
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
          <span id="bigCircle">
            <span class="flashit" id="bigInner"></span>
            <span id="bigInner2"></span>
          </span>
          <span id="littleCircle1"></span>
          <span id="littleCircle2"></span>
          <span id="littleCircle3"></span>
          <span id="headerCutout"></span>
        </header>
        <SearchPokemon pokemon={this.state.pokemon} onSearch={this.handleSearchFunction} />
        <PokemonInfo pokemon={this.state.pokemon} updateTeam={this.updateTeam} />
        <MyTeam myTeam={this.state.myTeam} removePokemonFromTeam={this.removePokemonFromTeam} teamMoves={this.state.teamMoves}/>
        <footer className="App-footer">
          <span id="bigCircle"></span>
          <span id='line1'></span>
          <span id='line2'></span>
          <p>Ivy and Devon's Pokedex</p>
          <span class="flashText" id="textFlash">|</span>
          <span id="cross"></span>
        </footer>
      </div>
    );
  }
}

export default App;
