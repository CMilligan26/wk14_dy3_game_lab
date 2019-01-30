import React , { Component } from 'react';
import GridSquare from './GridSquare.js'

class GridContainer extends Component {

  constructor(props){
    super(props);
    this.state = {gridSquares: []}
    this.handleGridSquareChange = this.handleGridSquareChange.bind(this);
  };

  handleGridSquareChange(gridSquareState){
  }

  render(){
    for (var i = 0; i < 9; i++) {
      this.state.gridSquares.push(<GridSquare key={i} square={i}
        handleGridSquareChange={this.handleGridSquareChange} player={this.props.player}></GridSquare>)
    }
    return(
      <div className="Grid-Container">
      { this.state.gridSquares }
      </div>
    )
  }
}

export default GridContainer;
