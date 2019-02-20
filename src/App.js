import React, { Component } from 'react';
import SmoothieContainer from './SmoothieContainer.js'
import {IngredientContainer} from './IngredientContainer.js'
import ChosenIngredientList from './ChosenIngredientList.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      smoothies: [],
      ingredients: {},
      error: '',
      chosenIngredients: [],
      filteredSmoothies: []
    }
  }
  
  componentDidMount() {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/smoothies')
    .then(response => response.json())
    .then(result => {
      this.setState({
        smoothies: result.smoothies,
        filteredSmoothies: result.smoothies
      })
    })
    .catch(error => {
      this.setState({error: error.message})
    })
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/ingredients')
      .then(response => response.json())
      .then(data => {
        this.setState({
          ingredients: data.ingredients
        })
      })
      .catch(error => {
      this.setState({error: error.message})
      })
  }

  chooseIngredients = (ingredient) => {
    const updatedIngredients = [ ...this.state.chosenIngredients, ingredient]
    this.setState({ chosenIngredients: updatedIngredients }, () => {
      this.filterSmoothies();
    })
  }

  removeIngredient = (ingredient) => {
    const updatedIngredients = this.state.chosenIngredients.filter(chosenIngredient => {
      return chosenIngredient !== ingredient
    })
    this.setState({ chosenIngredients: updatedIngredients, filteredSmoothies: this.state.smoothies }, () => {
      if(this.state.chosenIngredients.length) {
        this.filterSmoothies();
      }
    })
  }

  filterSmoothies = () => {
    const { chosenIngredients } = this.state;
    const matching = this.state.filteredSmoothies.filter(smoothie => {
      let matched = false;
       chosenIngredients.forEach(chosen=> {
          matched = smoothie.ingredients.includes(chosen);
       })
       return matched;
    })
    this.setState({ filteredSmoothies: matching });
  }

  render() {
    return (
      <div className="App">
        {this.state.error && <p>{this.state.error}</p>}
        <h1>Blend It!</h1>
        <h2>Choose Your Ingredients:</h2>
        {Object.keys(this.state.ingredients).length > 0 && 
          <IngredientContainer 
          ingredients={this.state.ingredients} 
          chooseIngredients={this.chooseIngredients}
          removeIngredient={this.removeIngredient}
          />
        }
        {this.state.chosenIngredients.length > 0 &&
          <ChosenIngredientList ingredients={this.state.chosenIngredients} />
        }
        <SmoothieContainer 
          smoothies={this.state.filteredSmoothies}
          chosenIngredients={this.state.chosenIngredients}
        />
      </div>
    )
  }
}

export default App;
