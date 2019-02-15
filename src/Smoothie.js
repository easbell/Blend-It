import React, { Component } from 'react'

export default class Smoothie extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <div>
        {this.props.name}
        <img src={this.props.img}/>
      </div>
    )
  }
}
