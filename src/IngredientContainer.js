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
          <h3 className="ingredient-category">{category}</h3>
          <div className="ingredients">
            { this.props.ingredients[category].map(ingredient => {
              return (
                <Ingredient
                  isChosen={this.props.chosenIngredients.includes(ingredient)} 
                  ingredient={ingredient} 
                  key={ingredient} 
                  chooseIngredients={this.props.chooseIngredients}
                  removeIngredient={this.props.removeIngredient}
                />
              )
            })}
          </div>
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