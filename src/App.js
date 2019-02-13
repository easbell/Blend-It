import React, { Component } from 'react';
import {smoothies, ingredients} from './smoothie-data.js'
import SmoothieContainer from './SmoothieContainer.js'
import IngredientContainer from './IngredientContainer.js'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      smoothies: smoothies,
      ingredients: ingredients
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Blend It!</h1>
        <h2>Choose Your Ingredients</h2>
        <IngredientContainer ingredients={this.state.ingredients}/>
        <SmoothieContainer smoothies={this.state.smoothies}/>
      </div>
    );
  }
}

export default App;
