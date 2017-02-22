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
            <ul key={id}>
              <li><Food key={id} id={id} name={name} /></li>
            </ul>
          )
        })
      }

      return (
        <div>
          <h1>Foods</h1>
          {foodElements}
        </div>
      )
    }
  }

export default Foods
