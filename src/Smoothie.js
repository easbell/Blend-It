import React, { Component } from 'react';
import Recipe from './Recipe.js';
import './Smoothie.css';

export default class Smoothie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  expandRecipe = () => {
    const {isSelected} = this.state
    this.setState({isSelected: !isSelected})
    this.props.showRecipe(this.props)
    console.log(this.props.recipe)
  }
  
  render = () => {
    const {isSelected} = this.state
    return (
      <div>
        {!isSelected && 
          <div className='smoothie'onClick={this.expandRecipe}>
            <h3>{this.props.name}</h3>
            <img src={this.props.img}/>
          </div>
        }
        {isSelected && 
          <div className='smoothie'>
            <h3>{this.props.name}</h3>
            <img src={this.props.img}/>
            <Recipe recipe={this.props.recipe}/>
          </div>
        }
      </div>
    )
  }
}
