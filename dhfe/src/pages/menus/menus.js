import React, { Component } from 'react';
import Menu from './menu';
import Filters from './filters/filters'
import '../../styles/components/menus/menus.css';

class Menus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtersList: new Set()
    }
    this.handleFiltersUpdate = this.handleFiltersUpdate.bind(this)
  }

  handleFiltersUpdate(selectedFilters) {
    this.setState({
      filtersList: selectedFilters
    })
  }

  render() {
    return (
      <div id="content">
        <div className="dh-menu-nav">
          <Filters updateFilters={this.handleFiltersUpdate}/>
          <div className="dh-menu-nav-meal">
            <span className="dh-menu-nav-meal-span">Breakfast</span>
            |<span className="dh-menu-nav-meal-span">Lunch</span>
            |<span className="dh-menu-nav-meal-span">Dinner</span>
          </div>
          <div className="dh-menu-nav-status">
          </div>
        </div>
        <div className="dh-menu-container">
          <Menu name="evk" filters={this.state.filtersList}/>
          <Menu name="cafe-84" filters={this.state.filtersList}/>
          <Menu name="parkside" filters={this.state.filtersList}/>
        </div>

      </div>
    );
  }
}

export default Menus;
//
// <Menu name="evk"/>
// <Menu name="cafe-84"/>
// <Menu name="parkside"/>
