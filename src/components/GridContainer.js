import React , { Component } from 'react';
import GridSquare from './GridSquare.js'

class GridContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      gridSquareStates: [
        {1: ""},
        {2: ""},
        {3: ""},
        {4: ""},
        {5: ""},
        {6: ""},
        {7: ""},
        {8: ""},
        {9: ""}
      ],
      gridSquares: []
    }
    for (var i = 0; i < 9; i++) {
      this.state.gridSquares.push(<GridSquare key={i} square={i}
        handleGridSquareChange={this.handleGridSquareChange}></GridSquare>)
    }

    this.handleGridSquareChange = this.handleGridSquareChange.bind(this);
  };

  handleGridSquareChange(gridSquareState){
    const {key, string} = gridSquareState;
    const gridSquare = this.state.gridSquareStates[key]
    this.setState(
      {gridSquareStates: gridSquare = string}
    )
    console.log(this.state.gridSquareStates);
  }

  render(){
    return(
      <div className="Grid-Container">
      { this.state.gridSquares }
      </div>
    )
  }
}

export default GridContainer;
