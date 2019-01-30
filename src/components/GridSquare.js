import React from 'react';


const GridSquare = (props) => {
  function handleChange(event){
    const newValue = props.player;
    const gridSquareInfo = {square: props.square, value: newValue}
    props.handleGridSquareChange(gridSquareInfo);
  }

    return(
      <>
        <button className={props.className} onClick={handleChange} value={props.value}>
        </button>
      </>
    )
};


export default GridSquare;
