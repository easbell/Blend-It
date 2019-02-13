import React, { Component } from 'react'

// Ingredient selection at start
export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: Object.keys(this.props.ingredients)
    }
    console.log("ingContainer props", this.state.categories)
  }
  render() {
    return (
      <div>
        {
          this.state.categories.map(category => {
            return <h3>{category}</h3>
          })
        }
      </div>
    )
  }
}

