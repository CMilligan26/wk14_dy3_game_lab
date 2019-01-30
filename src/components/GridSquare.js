import React from 'react';

const GridSquare = ({square, handleGridSquareChange}) => {

function handleChange(event){
  console.log(event.target);
  console.log(event.target.square);
  const gridSquareInfo = {square: event.target.square, string: event.target.value}
  console.log(gridSquareInfo);
  handleGridSquareChange(gridSquareInfo)
}

return(
  <option square={square} className="Grid-Square" onClick={handleChange} value="test">
  </option>
)
};

export default GridSquare;
