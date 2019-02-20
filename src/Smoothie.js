import React, { Component } from 'react';

export default class Smoothie extends Component {
  expandRecipe = () => {
    const {showRecipe} = this.props
    showRecipe(this.props)
  }
  
  render = () => {
    return (
      <div className='smoothie smoothie-in-list' onClick={this.expandRecipe}>
        <h3 className='smoothie-list-name'>{this.props.name}</h3>
        <img src={this.props.img}/>
      </div>
    )
  }
}
