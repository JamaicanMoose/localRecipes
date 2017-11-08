import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Welcome to Recipe App</h1>
        </header>
        <p className="Location-entry">
          <input type="text" name="location" placeholder="Enter your location"/> 
          <button>Go!</button> <br />
          <input type="checkbox" name="nuts"/> Nut allergy 
          <input type="checkbox" name="vegan"/> Vegan <br />
          <input type="checkbox" name="vegetarian"/> Vegetarian 
          <input type="checkbox" name="gluten free"/> Gluten free<br />
        </p>
      </div>
    );
  }
}

export default App;
