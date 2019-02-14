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
      ingredients: ingredients,
      error: '',
      chosenIngredients: [],
      // filteredSmoothies: smoothies
    }
  }

  fetchData = () => {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/smoothies')
    .then(response => response.json())
    .then(result => {
      this.setState({
        smoothies: result.smoothies
      })
    })
    .catch(error => {
      this.setState({error: error.message})
    })
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/ingredients')
      .then(response => response.json())
      .then(result => {
        this.setState({
          ingredients: result.ingredients
        })
      })
      .catch(error => {
      this.setState({error: error.message})
      })
  }
  
  componentDidMount() {
    this.fetchData()
  }

  chooseIngredients = (ingredient) => {
    const updatedIngredients = [ ...this.state.chosenIngredients, ingredient]
    this.setState({chosenIngredients: updatedIngredients})
    this.filterSmoothies();
  }

  removeIngredient = (ingredient) => {
    const updatedIngredients = this.state.chosenIngredients.filter(chosenIngredient => {
      return chosenIngredient !== ingredient
    })
    this.filterSmoothies();
    this.setState({chosenIngredients: updatedIngredients})
  }

  filterSmoothies = () => {
    this.state.chosenIngredients.forEach(ingredient => {
      this.state.smoothies = smoothies.filter(smoothie => {
        return smoothie.ingredients.includes(ingredient)
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.error && <p>{this.state.error}</p>}
        <h1>Blend It!</h1>
        <h2>Choose Your Ingredients</h2>
        <IngredientContainer 
          ingredients={this.state.ingredients} 
          chooseIngredients={this.chooseIngredients}
          removeIngredient={this.removeIngredient}
        />
        <SmoothieContainer 
          smoothies={this.state.smoothies}
          // filteredSmoothies={this.state.filteredSmoothies}
        />
      </div>
    );
  }
}

export default App;
