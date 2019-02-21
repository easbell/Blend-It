import React, {Component} from 'react';
import Smoothie from './Smoothie.js';
import Recipe from './Recipe.js';

export default class SmoothieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipe: false,
      chosenSmoothie: ''
    }
  }

  showRecipe = (smoothie) => {
    const {hideIngredients} = this.props
    const {showRecipe} = this.state;
    this.setState({showRecipe: !showRecipe, chosenSmoothie: smoothie.id});
    hideIngredients()
  }

  render = () => {
    const {showRecipe, chosenSmoothie} = this.state;
    let smoothieRecipe = this.props.smoothies.find(smoothie => {
      return smoothie.id === chosenSmoothie
    })
    return (
      <div>
        <h2>Matching Smoothie Recipes:</h2>
        {!this.props.smoothies.length &&
          <div className="broaden-search">
            <h2>Oops! We didn't find any matching smoothies.</h2>
            <h2>Please broaden your search.</h2>
          </div>
        } 
        <div className="all-smoothies">
          {!showRecipe &&
            this.props.smoothies.map(smoothie => {
              return (
                <Smoothie
                  showRecipe={this.showRecipe}
                  name={smoothie.name}
                  img={smoothie.img}
                  key={smoothie.id}
                  id={smoothie.id}
                />
              )
            })
          }
          {showRecipe && 
            <div className="smoothie-container">
              <Smoothie 
                showRecipe={this.showRecipe}
                name={smoothieRecipe.name}
                img={smoothieRecipe.img}
                key={smoothieRecipe.id}
                id={smoothieRecipe.id}
              />
              <Recipe chosenRecipe={smoothieRecipe}/>
              <h4 className="back-button" onClick={this.showRecipe}><i className="fas fa-chevron-circle-left"></i>Back to Results</h4>
            </div>
          }
        </div>
      </div>
    )
  }
}
