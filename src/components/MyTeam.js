import React, { Component } from 'react';
import '../css/MyTeam.css';

class MyTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      selected: 0,
    }
  }

  editTeam = () => {
    this.setState({isHidden: !this.state.isHidden});
  }

  removePokemon = idx => {
    this.props.removePokemonFromTeam(idx);
  }

  selectPokemon = index => {
    // const selected = this.props.myTeam.filter((teamPokemon, idx) => {
    //   return index === idx;
    // })
    this.setState({ selected: index });
  }

  editMoves = idx => {
    this.setState({ 
      selected: idx,
    });
    
  }

  removeSelectedMove = (e) => {
    e.preventDefault();
    // find selected pokemon
    // edit remove move
  }

  render() {
    const { myTeam } = this.props;
    return(
      <div className="my-team">
        <h1>My Team</h1>
        <div className="team-pokemon-list">
        {(myTeam.length > 0) ? myTeam.map((pokemon, idx) => 
          <div className="team-pokemon" key={pokemon.id} onClick={() => this.selectPokemon(idx)} >
            { this.state.isHidden && <div><button className="x-pokemon" onClick={() => this.removePokemon(idx)} >X</button> 
            {/* <button className="edit-moves-button" onClick={() => this.editMoves(idx)} >Edit Moves</button> */}
            </div> }
            <img alt="pokemon" src={ pokemon.sprites.front_default }  /><br />
            { pokemon.name } <br />
            {/* Moves: {pokemon.selectedMoves.map((move, idx) => (
            <div key={move.move.name}>
              {move.move.name}
            </div>))} */}
          </div>
        ) : <h1> No Pokemon on your Team </h1> }
        </div>
        <div className='team-details'>
          
        </div>
          <button className="edit-team" onClick={this.editTeam} >{ this.state.isHidden ? "Close" : "Edit Team" }</button>
      </div>
    ) 
  }

}

export default MyTeam