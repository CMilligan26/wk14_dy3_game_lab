import React from 'react';


const GridSquare = (props) => {
  function handleChange(event){
    if (event.target.value !== "crosses" && event.target.value !== "naughts" && props.winner!=="crosses wins!" && props.winner!=="naughts wins!" && props.winner!=="Tie!") {
    const newValue = props.player;
    const gridSquareInfo = {square: props.square, value: newValue}
    props.handleGridSquareChange(gridSquareInfo);
  }
  }

    return(
      <>
        <button className={props.className} onClick={handleChange} value={props.value}>
        </button>
      </>
    )
};


export default GridSquare;
