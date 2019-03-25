import React from 'react';

class MoveDetail extends React.Component {
  render() {
    const { move } = this.props;
    return(
      <div className='move-detail'>
        Name: {move.name} <br />
        Accuracy: { move.accuracy } <br />
        Power: { move.power } <br />
        PP: { move.pp } <br />
        <button onClick={this.props.hideMoveDetail} className='close-move-detail' type='button'>X</button>
      </div>
    )
  }
}

export default MoveDetail;