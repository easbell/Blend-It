import React, { Component } from 'react';
import Ingredient from './Ingredient.js';

export class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      categories: ['fruit', 'vegetables', 'bases', 'extras']
    }
  }

  gatherIngredients = () => {
    return this.state.categories.map(category => {
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
          }).slice(0, 6) }
        </div>)
    })
  }
  
  render() {
    return (
      <div className='ingredients-container'>
        {this.gatherIngredients()}
      </div>
    )
  }
}

export default IngredientContainer;