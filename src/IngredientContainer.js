import React, { Component } from 'react';
import Ingredient from './Ingredient.js';
import './IngredientContainer.css';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      categories: ['fruit', 'vegetables', 'bases', 'extras']
    }
  }
  
  render() {
    console.log(this.props.ingredients)
    console.log(this.state)
    return (
      <div className='ingredients-container'>
        {
          this.state.categories.map(category => {
            return (
              <div key={category}>
                <h3>{category}</h3>
                { this.props.ingredients[category].map(ingredient => {
                  return (
                    <Ingredient 
                      ingredient={ingredient} 
                      key={ingredient} 
                      chooseIngredients={this.props.chooseIngredients}
                      removeIngredient={this.props.removeIngredient}
                    />
                  )
                }).slice(0, 6)}
              </div>
            )
          })
        }
      </div>
    )
  }
}

