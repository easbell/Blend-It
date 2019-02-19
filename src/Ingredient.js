import React, {Component} from 'react';

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChosen: false
    }
  }

  selectIngredient = () => {
    const {isChosen} = this.state
    const {ingredient, chooseIngredients, removeIngredient} = this.props

    if (isChosen === true) {
      this.setState({isChosen: !isChosen}, removeIngredient(ingredient))
    } else if (isChosen === false) {
      this.setState({isChosen: !isChosen}, chooseIngredients(ingredient))
    }
    
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
          <h4 className='selected' onClick={this.selectIngredient}>
            {ingredient}
          </h4>
        }
      </div>
    )
  }
}
