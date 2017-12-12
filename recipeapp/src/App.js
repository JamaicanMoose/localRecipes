import React, { Component } from 'react';

import PlaceForm from './PlaceForm.js';
import Ingredients from './ingredients.js';
import {
  Route,
  HashRouter
} from "react-router-dom";

import ChosenRecipe from './recipe.js';
import './App.css';
import RecipeList from './RecipeList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      foods: [],
      place: "Medford, MA, United States",
      recipeid: 0
    };
    this.handleSubmitLoc = this.handleSubmitLoc.bind(this);
    this.handleSubmitFoods = this.handleSubmitFoods.bind(this);
    this.handleSelectRecipe = this.handleSelectRecipe.bind(this);
  }

 /* checkLocStorage() {
    
  }*/

  handleSubmitLoc(place) {
    this.setState({
      place: place
    });
  }

  handleSubmitFoods(newFoods) {
    this.setState({
      foods: newFoods
    });
  }

  handleSelectRecipe(recipe) {
    console.log("setting recipe id to")
    console.log(recipe.id)
    this.setState({
      recipeid: recipe.id
    });
  }

  render() {
    return(

      <div>
      <div className="heading">
          <h1 className="title">Sustainable Cooking</h1>
      </div>

      <HashRouter>  

        <div>
          <Route exact path="/" component={()=><PlaceForm action = {this.handleSubmitLoc}/>}/>
          <Route path ="/ingredientList" component={()=><Ingredients action = {this.handleSubmitFoods} place={this.state.place}/>}/>
          <Route path = "/recipeList" component={()=><RecipeList action = {this.handleSelectRecipe} ingredients={this.state.foods}/>}/>
          <Route path = "/chosenRecipe" component={()=><ChosenRecipe id={this.state.recipeid}/>}/>
        </div>

      </HashRouter>
      </div>
    )
  }

} export default App;

