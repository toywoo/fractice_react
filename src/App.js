import React from "react";
import PropTypes from "prop-types";

//{fav} = props.fav

class App extends React.Component{
  state = {
    count : 0
  } // put the date

  add = () => {this.setState(current => ({count : current.count + 1}))} // this.state.count = 1 (x) because Auto render function call
  minus = () => {this.setState(current => ({count : current.count - 1}))}//this.state.count + 1 (X) because performance problem

  render(){
    return(
      <div>
        <h1> {this.state.count}</h1>
        <button onClick ={this.add}>Add</button> 
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;

/*
https://reacts.org/docs/react-component.html 
component Life Cycle 
Constructor() =>  render() => componentDidMount() => if change ex)click button up componentDidUpdate() => componentWillUnmount()

*/
