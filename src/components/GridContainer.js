import React , { Component } from 'react';
import GridSquare from './GridSquare.js'

class GridContainer extends Component {

  constructor(props){
    super(props);
    this.state = {gridSquares: []}
    this.handleGridSquareChange = this.handleGridSquareChange.bind(this);
  };

  handleGridSquareChange(gridSquareState){
    this.props.handleGridSquareClicked(gridSquareState);
  }

  render(){
    this.state.gridSquares = this.props.squareStates.map((item, index) => {
    return <GridSquare
    key={index}
    square={index}
    value={item}
    handleGridSquareChange={this.handleGridSquareChange}
    player={this.props.player}>
    </GridSquare>
  }
  )

  return(
    <div className="Grid-Container">
    { this.state.gridSquares }
    </div>
  )
}
}

export default GridContainer;
