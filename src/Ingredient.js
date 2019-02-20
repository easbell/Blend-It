import React, {Component} from 'react';

export default class Ingredient extends Component {

  selectIngredient = () => {
    const {ingredient, chooseIngredients, removeIngredient, isChosen} = this.props
    if (isChosen === true) {
      removeIngredient(ingredient)
    } else if (isChosen === false) {
      chooseIngredients(ingredient)
    }  
  }

  render() {
    const {ingredient} = this.props
    return ( 
      <div className="ingredient-list">
        {!this.props.isChosen && 
          <h4 className='not-selected' onClick={this.selectIngredient}>
            {ingredient}
          </h4>
        }
        {this.props.isChosen && 
          <h4 className='selected' onClick={this.selectIngredient}>
            {ingredient}
          </h4>
        }
      </div>
    )
  }
}
