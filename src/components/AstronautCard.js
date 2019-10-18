import React, { Component } from 'react'

export default class AstronautCard extends Component {
  
  render() {
    return (
      <li id={this.props.name}>
        <h4>{this.props.name}</h4>
        <p>Spacecraft: {this.props.craft}</p>
      </li>
    )
  }
}