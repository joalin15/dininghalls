import React, { Component } from 'react';
import Food from './Food'

class Foods extends Component {
  constructor() {
    super()
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/foods')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({foods: json})
        console.log('parsed /foods json', json)
      })
      .catch(ex => console.log('/foods parsing failed', ex))
  }

  render() {
    let foods = this.state.foods
    let foodElements = []
    if (foods) {
      foodElements = foods.map((food) => {
        let name = food.name
        let id = food._id
        return (
          <ul key={id} className="api-list">
            <li><Food key={id} id={id} name={name} /></li>
          </ul>
        )
      })
    }
    console.log(foodElements)

    return (
      <div id="api-container-list">
        {foodElements}
      </div>
    )
  }

  async getFoods(name) {
    let response = await fetch('http://localhost:4000/foods')
    let body = await response.json()
    let foods = body
    return foods;
  }
}

export default Foods
