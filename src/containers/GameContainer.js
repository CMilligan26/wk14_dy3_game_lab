import React, { Component } from 'react';
import GridContainer from '../components/GridContainer';
import GameHeader from '../components/GameHeader';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <>
      <GameHeader />
      <GridContainer />
      </>
    );
  }
}

export default GameContainer;
