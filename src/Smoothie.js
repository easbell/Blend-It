import React, { Component } from 'react'

export class Smoothie extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default Smoothie
