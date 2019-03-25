import React, { Component } from 'react';
import MoveDetail from './MoveDetail';

class MovesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
    }
  }
  
  getMoveDetail = e => {
    e.preventDefault();
    this.props.updateMoveDetail(e.target.value);
    this.showMoveDetail();
  }

  showMoveDetail = () => {
    this.setState({ isHidden: false });
  }

  hideMoveDetail = () => {
    this.setState({ isHidden: true });
  }

  render() {
    const { pokemon, move } = this.props;
    const { isHidden } = this.state;
    return(
      <div className='moves-list' >
        { !isHidden && <MoveDetail move={move} hideMoveDetail={this.hideMoveDetail} />}
        { pokemon.moves.map(move => (
          <button type='button' value={move.move.url} key={move.move.name} onClick={this.getMoveDetail} className='move'> {move.move.name} </button>
        )
        )
        }
      </div>
    )

  }
}

export default MovesList;