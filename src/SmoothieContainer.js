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
    const {showRecipe, chosenSmoothie} = this.state;
    this.setState({showRecipe: !showRecipe, chosenSmoothie: smoothie.id});
  }

  render = () => {
    const {showRecipe, chosenSmoothie} = this.state;
    let smoothieRecipe = this.props.smoothies.find(smoothie => {
      return smoothie.id === chosenSmoothie
    })
    return (
      <div>
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
          </div>
        }
      </div>
    )
  }
}
