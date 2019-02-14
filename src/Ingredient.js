import React, {Component} from 'react';
import IngredientContainer from './IngredientContainer.js';
import './Ingredient.css';

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChosen: false
    }
  }

  selectIngredient = () => {
    const {isChosen} = this.state
    const {ingredient, chooseIngredients} = this.props
    this.setState({isChosen: !isChosen}, chooseIngredients(ingredient))
    
  }

  removeIngredient = () => {
    const {isChosen} = this.state
    const {ingredient, removeIngredient} = this.props
    this.setState({isChosen: !isChosen}, removeIngredient(ingredient))
  }

  render() {
    const {isChosen} = this.state
    const {ingredient} = this.props
    return ( 
      <div>
        {!isChosen && 
          <h4 className='not-selected' onClick={this.selectIngredient}>
            {ingredient}
          </h4>
        }
        {isChosen && 
          <h4 className='selected' onClick={this.removeIngredient}>
            {ingredient}
          </h4>
        }
      </div>
    )
  }
}
