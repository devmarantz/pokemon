import React, { Component } from 'react';
import '../css/PokemonInfo.css'

class PokemonInfo extends Component {

  addToTeam = () => {
    this.props.updateTeam();
  }

  render() {
    const { pokemon } = this.props;
    return(
      <div className="pokemon-info">
      { pokemon.name ?  
        <div className="container">
          <div className="pokemon-pic">
            <img alt="pokemon" src={pokemon.sprites.front_default} /> 
          </div>
          <div className="pokemon-details">
            Name: {pokemon.name} <br />
            <ul className="type">
              Types: {pokemon.types.map(type => (
                <li key={type.type.name}> {type.type.name} </li>
              ))} 
            </ul>
            <ul className="stats"> 
              Stats: {pokemon.stats.map(stat => (
                <li key={stat.stat.name}> {stat.stat.name}: {stat.base_stat} </li>
              ))}
            </ul>
            <ul className="moves">
              Moves: {pokemon.moves.slice(0, 5).map(move => (
                <li key={move.move.name}> {move.move.name} </li>
              ))}
            </ul>    
          </div>      
          <button type="button" onClick={this.addToTeam} >Add To Team</button>  
        </div>
        : 
        <h1>No Pokemon Selected</h1>
      }
      </div>
    )
  }
}


export default PokemonInfo;