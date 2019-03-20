import React, { Component } from 'react';
import '../css/PokemonInfo.css';

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
          <div class="row">
            <div class="column">
              <div className="pokemon-pic">
                <img alt="pokemon" src={pokemon.sprites.front_default} /> 
              </div>
            </div>
            <div class="column">
              <div className="pokemon-details">
                <div className="pokemon-name"> {pokemon.name} </div>
                <div className="pokemon-type">TYPE {pokemon.types.map(type => (
                  <div className="type" key={type.type.name}> {type.type.name} </div>
                ))}
                </div>
                <div className="pokemon-height">HEIGHT {pokemon.height}</div> 
                <div className="pokemon-weight">WEIGHT {pokemon.weight}</div> 
                
                <ul className="stats"> 
                  STATS {pokemon.stats.map(stat => (
                    <li key={stat.stat.name}> {stat.stat.name}: {stat.base_stat} </li>
                    ))}
                </ul>
              </div>      
            </div>
        </div>
          <div className="details-footer">
            <button type="button" onClick={this.addToTeam} >View Moves</button> 
            <button type="button" onClick={this.addToTeam} >Add To Team</button> 
          </div> 
        </div>
        : 
        <h1>No Pokemon Selected</h1>
      }
      </div>
    )
  }
}


export default PokemonInfo;