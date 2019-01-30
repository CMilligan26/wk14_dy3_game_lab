import React, { Component } from 'react';


class GridSquare extends Component {
  constructor(props){
    super(props);
    this.index = props.square;
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const newValue = this.props.player;
    if(this.props.player === "crosses"){
      event.target.className = "Cross"
    }
    else if (this.props.player === "naughts"){
      event.target.className = "Naught"
    }
    this.setState({value: newValue})
    const gridSquareInfo = {square: this.index, value: this.state.value}
    this.props.handleGridSquareChange(gridSquareInfo);
  }

  render(){
    return(
      <>
        <button className="Grid-Square" onClick={this.handleChange} value={this.state.value}>
        </button>
      </>
    )
  }


};


export default GridSquare;

// TODO: make this into a class, state=index,
