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
  }

  render(){
    return(
      <div className="App">
      <GameHeader />
      <GridContainer squareStates={this.state.squareStates} player={this.state.player}/>
      </div>
    );
  }
}

export default GameContainer;
