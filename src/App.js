import React, { Component } from 'react'
import AstronautCard from './components/AstronautCard'

export default class App extends Component {

  state = {
    astronauts: []
  }

  generateListItems = () => {
    return this.state.astronauts.map(astronaut => <AstronautCard name={astronaut.name} craft={astronaut.craft} />)
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ astronauts: data.people })
      })
  }
  
  render() {
    return (
      <ul>
        {this.generateListItems()}
      </ul>
    )
  }
}