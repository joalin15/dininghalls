import React, { Component } from 'react';
//import shallowCompare from 'react/lib/shallowCompare'
import Foods from '../../data/foods/Foods'
import '../../styles/components/menus/menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodsList: [],
    };
    this.getFoods = this.getFoods.bind(this)
  }

  async componentDidMount() {
    await this.getFoods().then(foods => {
      this.setState({foodsList: foods})
    })
  }

  async componentWillReceiveProps(newProps) {
    await this.getFoods().then(foods => {
      this.setState({foodsList: foods})
    })
  }

  async getFoods() {
    let name = this.props.name
    let venueName = ""
    if (name === "evk") {
      venueName = "Everybody's Kitchen"
    }
    if (name === "cafe-84") {
      venueName = "Cafe 84"
    }
    if (name === "parkside") {
      venueName = "Parkside Restaurant & Grill"
    }

    let foodsObject = new Foods()
    let foods = await foodsObject.getFoods(this.props.name)
    let foodElements = []
    let filters = this.props.filters
    if (foods) {
      let i = 0;
      foodElements = foods.map((food) => {
         if (food.venue === venueName) {
          var meets = 0;
          for (const filter of filters) {
            if (food[filter] === true) {
              meets ++;
            }
          }
          if (meets === filters.size) {
            let id = name + "-" + i
            let foodName = food.name;
            i++
            return (<li id={id} key={id} className="dh-menu-list-item">{foodName}</li>)
          }
        }
        return null;
      })
    }
    return foodElements;
  }

  getHeader() {
    if (this.props.name === "evk") {
      return "EVK"
    }
    if (this.props.name === "cafe-84") {
      return "CAFE 84"
    }
    if (this.props.name === "parkside") {
      return "PARKSIDE"
    }
  }

  render() {
    let classname = "dh-menu " + this.props.name;
    let header = this.getHeader()
    let foodElements = this.state.foodsList
    return (
      <div className={classname}>
        <div className="dh-menu-title-container">
          <h3 className="dh-menu-title">{header}</h3>
        </div>
        <div className="dh-menu-list-container">
          <ul className="dh-menu-list">
            {foodElements}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
