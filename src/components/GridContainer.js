import React from 'react';
import GridSquare from './GridSquare.js'

const GridContainer = (props) => {

  const newGridSquares = props.squareStates.map((item, index) => {
    return <GridSquare
    key={index}
    square={index}
    value={item}
    handleGridSquareChange={handleGridSquareChange}
    player={props.player}>
    </GridSquare>
  }
)

function handleGridSquareChange(gridSquareState){
  props.handleGridSquareClicked(gridSquareState);
}

  return(
    <div className="Grid-Container">
    { newGridSquares }
    </div>
  )
}

export default GridContainer;
