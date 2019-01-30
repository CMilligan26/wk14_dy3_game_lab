import React, { Component } from 'react';
import GridContainer from '../components/GridContainer';
import GameHeader from '../components/GameHeader';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareStates: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      player: "crosses",
      winner: "Start Game"
    };

  this.handleGridSquareClicked = this.handleGridSquareClicked.bind(this);
  this.checkWinner = this.checkWinner.bind(this);
  }

  handleGridSquareClicked(gridSquareState){
    const {square, value} = gridSquareState;
    this.setState(
      prevState =>
      {
        let newState = prevState.squareStates;
        newState[square] = value;
        let newPlayer = "";
        if(prevState.player === "crosses") {
          newPlayer = "naughts"
        }
        else if (prevState.player === "naughts") {
          newPlayer = "crosses"
        }
        const newWinner = this.checkWinner()+" wins";
        return {squareStates: newState, player: newPlayer, winner: newWinner}
      }
    )
  }

  checkWinner(){
    const currentGrid = this.state.squareStates;
    //ROWS
    if (currentGrid[0] === currentGrid[1] && currentGrid[1] === currentGrid[2]) {
      return currentGrid[1]
    }
    else if (currentGrid[3] === currentGrid[4] && currentGrid[4] === currentGrid[5]) {
      return currentGrid[4]
    }
    else if (currentGrid[6] === currentGrid[7] && currentGrid[7] === currentGrid[8]) {
      return currentGrid[7]
    }
    //COLUMNS
    else if (currentGrid[0] === currentGrid[3] && currentGrid[3] === currentGrid[6]) {
      return currentGrid[0]
    }
    else if (currentGrid[1] === currentGrid[4] && currentGrid[4] === currentGrid[7]) {
      return currentGrid[1]
    }
    else if (currentGrid[2] === currentGrid[5] && currentGrid[5] === currentGrid[8]) {
      return currentGrid[2]
    }
    //DIAGONALS
    else if (currentGrid[0] === currentGrid[4] && currentGrid[4] === currentGrid[8]) {
      return currentGrid[0]
    }
    else if (currentGrid[2] === currentGrid[4] && currentGrid[4] === currentGrid[6]) {
      return currentGrid[2]
    }
  }

  render(){
    return(
      <div className="App">
      <GameHeader winner={this.state.winner}/>
      <GridContainer handleGridSquareClicked={this.handleGridSquareClicked} squareStates={this.state.squareStates} player={this.state.player}/>
      </div>
    );
  }
}

export default GameContainer;
