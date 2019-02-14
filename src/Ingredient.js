import React, {Component} from 'react';
import IngredientContainer from './IngredientContainer.js'

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
    this.setState({isChosen: true}, chooseIngredients(ingredient))
  }

  removeIngredient = () => {
    const {isChosen} = this.state
    const {ingredient, removeIngredient} = this.props
    this.setState({isChosen: false}, removeIngredient(ingredient))
  }

  render() {

    const {isChosen} = this.state
    const {ingredient} = this.props
    return ( 
      <div>
        {!isChosen && 
          <h4 onClick={this.selectIngredient}>
            {ingredient}
          </h4>
        }
        {isChosen && 
          <h4 onClick={this.removeIngredient}>
            {ingredient}
          </h4>
        }
      </div>
    )
  }
}
