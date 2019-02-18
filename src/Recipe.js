import React, { Component } from 'react';
import Smoothie from './Smoothie.js';

export class Recipe extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.recipe.map(steps => {
            return <p>steps</p>
          })
        }
      </div>
    )
  }
}

export default Recipe
