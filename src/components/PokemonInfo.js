import React, { Component } from 'react';

class PokemonInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      sprites: [],
      types: [],
      stats: [],
      moves: []
    }
  }

  componentDidUpdate = () => {
    const { pokemon } = this.props;
    if (pokemon.name !== this.state.name)
    this.setState({
      name: pokemon.name,
      sprites: pokemon.sprites,
      types: pokemon.types,
      stats: pokemon.stats,
      moves: pokemon.moves
    })
  }

  render() {
    return(
      <div className="pokemon-info">
        {/* <div className="pokemon-pic"><img alt="pokemon" src={require(this.props.sprite)} /> </div> */}
        <div className="pokemon-details">
        Name: {this.state.name}
        Type: {this.state.types.map(type => type.type.name)}
        </div>
      </div>
    )
  }
}


export default PokemonInfo;