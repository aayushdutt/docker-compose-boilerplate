import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    arr: []
  };

  componentDidMount() {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ arr: data });
      });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.arr.map(el => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
