import React, { Component } from 'react';
import '../css/PokemonInfo.css';
import MovesList from './MovesList';

class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    }
  }

  addToTeam = () => {
    this.props.updateTeam();
  }

  toggleMovesList = () => {
    this.setState({isHidden: !this.state.isHidden});
  }

  render() {
    const { pokemon, updateMoveDetail, move } = this.props;
    const { isHidden } = this.state;
    return(
      <div className="pokemon-info">
        { !isHidden && <MovesList pokemon={pokemon} updateMoveDetail={updateMoveDetail} move={move} />}
      { pokemon.name ?  
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="pokemon-name"> {pokemon.name} </div>
              <div className="pokemon-pic">
                <img alt="pokemon" src={pokemon.sprites.front_default} /> 
              </div>
            </div>
            <div className="column">
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
          <div className="details-footer">
            <button type="button" onClick={this.toggleMovesList} >View Moves</button> 
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