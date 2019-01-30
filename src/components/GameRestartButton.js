import React from 'react'

const GameRestartButton = (props) => {
  if(props.winner==="crosses wins!" || props.winner==="naughts wins!" || props.winner==="Tie!"){
    return(
      <button className="Game-Restart-Button" onClick={props.resetGame}>Restart Game</button>
    )
  }
  else{
    return null;
  }
}

export default GameRestartButton;
