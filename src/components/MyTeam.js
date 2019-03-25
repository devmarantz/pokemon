import React, { Component } from 'react';
import '../css/MyTeam.css';

class MyTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false,
      selected: {},
    }
  }

  editTeam = () => {
    this.setState({isHidden: !this.state.isHidden});
  }

  removePokemon = idx => {
    this.props.removePokemonFromTeam(idx);
  }

  render() {
    const { myTeam } = this.props;
    return(
      <div className="my-team">
        <h1>My Team</h1>
        <div className="team-pokemon-list">
        {(myTeam.length > 0) ? myTeam.map((pokemon, idx) => 
          <div className="team-pokemon" key={pokemon.id}>
            { this.state.isHidden && <div><button className="x-pokemon" onClick={() => this.removePokemon(idx)} >X</button> <button className="edit-moves-button" >Edit Moves</button></div> }
            <img alt="pokemon" src={ pokemon.sprites.front_default } /><br />
            { pokemon.name } 
          </div>
        ) : <div> No Pokemon on your Team </div> }
        </div>
          <button onClick={this.editTeam} >{ this.state.isHidden ? "Close" : "Edit Team" }</button>
      </div>
    ) 
  }

}

export default MyTeam