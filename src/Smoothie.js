import React, { Component } from 'react';

export default class Smoothie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  expandRecipe = () => {
    const {isSelected} = this.state
    const {showRecipe} = this.props
    this.setState({isSelected: !isSelected})
    showRecipe(this.props)
  }
  
  render = () => {
    const {isSelected} = this.state
    return (
      <div>
        {!isSelected && 
          <div className='smoothie' onClick={this.expandRecipe}>
            <h3>{this.props.name}</h3>
            <img src={this.props.img}/>
          </div>
        }
        {isSelected && 
          <div className='smoothie'>
            <h3>{this.props.name}</h3>
            <img src={this.props.img}/>
          </div>
        }
      </div>
    )
  }
}
