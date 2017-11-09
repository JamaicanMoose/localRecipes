import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0, 
      vegan: false,
      veg: false,
      glutenFree: false,
      nutAllergy: false 
    };
    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
          })
      })
    }
    else {
      alert("This broswer does not support geolaction. \nYou must enter a location to generate recipes.")
    }
}

  /*switchBox(name) {
    var key = name;
    this.setState({key: !this.state.key})
    alert(this.s)
  }*/

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Welcome to Recipe App</h1>
        </header>
        <p className="Location-entry">
          <input type="text" name="location" placeholder="Press generate to use your current location"/> 
          <button onClick={()=>alert(this.state.lng)}>Generate!</button> <br />
          <input type="checkbox" name="nutAllergy" onClick={()=>this.setState({nutAllergy: !this.state.nutAllergy})}/> Nut allergy 
          <input type="checkbox" name="vegan" onClick={()=>this.setState({vegan: !this.state.vegan})}/> Vegan <br />
          <input type="checkbox" name="vegetarian" onClick={()=>this.setState({veg: !this.state.veg})}/> Vegetarian 
          <input type="checkbox" name="glutenFree" onClick={()=>this.setState({glutenFree: !this.state.glutenFree})}/> Gluten free<br />
        </p>
      </div>
    );
  }
}

export default App;
