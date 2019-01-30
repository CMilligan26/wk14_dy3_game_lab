import React, { Component } from 'react';


class GridSquare extends Component {
  constructor(props){
    super(props);
    this.index = props.square;
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: this.props.player})
    const gridSquareInfo = {square: this.index, value: this.state.value}
    console.log(gridSquareInfo);

  }

  render(){
    return(
      <>
        <button className="Grid-Square" onClick={this.handleChange}>
        </button>
      </>
    )
  }


};


export default GridSquare;

// TODO: make this into a class, state=index,
