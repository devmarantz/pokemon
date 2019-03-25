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
          <div className="row">
            <div className="column">
              <div className="pokemon-name"> {pokemon.name} </div>
              <div className="pokemon-pic">
                <img id='pokemon' alt="pokemon" src={pokemon.sprites.front_default} /> 
                <img id='pokeball' alt="pokeball" src={`https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Open_Pokeball-512.png`} /> 
              </div>
            </div>
            <div class="column">
              <div className="pokemon-details">
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
          <div className="details-screen-footer">
            <button type="button" onClick={this.addToTeam} >View Moves</button> 
            <button type="button" onClick={this.addToTeam} >Add To Team</button> 
          </div> 
        </div>
        : 
        <h1>No Pokemon Selected</h1>
      }
      <footer className="details-footer">
        <span id="footerCutout"></span>
        <span id="littleCircle"></span>
        <li>
          <span id="line"></span>
          <span id="line"></span>
          <span id="line"></span>
          <span id="line"></span>
        </li>
      </footer>
      </div>
    )
  }
}


export default PokemonInfo;