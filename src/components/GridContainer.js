import React from 'react';
import GridSquare from './GridSquare.js'

const GridContainer = (props) => {

  const newGridSquares = props.squareStates.map((item, index) => {
    return <GridSquare
    key={index}
    square={index}
    value={item}
    className={checkDisplay(item)}
    handleGridSquareChange={handleGridSquareChange}
    player={props.player}
    winner={props.winner}>
    </GridSquare>
  }
)

function checkDisplay(item){
  if(item === "crosses"){
     return "Cross"
  }
  else if (item === "naughts"){
    return "Naught"
  }
  else {
    return "Grid-Square"
  }
}

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
