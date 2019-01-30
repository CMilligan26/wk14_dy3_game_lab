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
      player: "crosses"
    };

  this.handleGridSquareClicked = this.handleGridSquareClicked.bind(this);
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
        return {squareStates: newState, player: newPlayer}
      }
    )
    console.log(this.state.squareStates);
  }

  render(){
    return(
      <div className="App">
      <GameHeader />
      <GridContainer handleGridSquareClicked={this.handleGridSquareClicked} squareStates={this.state.squareStates} player={this.state.player}/>
      </div>
    );
  }
}

export default GameContainer;
