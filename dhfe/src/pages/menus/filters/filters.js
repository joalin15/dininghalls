import React, { Component } from 'react'
import Filter from './filter'
import '../../../styles/components/filters.css'

const filters = [
  'vegan',
  'vegetarian',
  'pork'
]

class Filters extends Component {
  constructor(props) {
    super(props)
    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleFiltersSubmit = this.handleFiltersSubmit.bind(this);
  }

  componentWillMount() {
    this.selectedFilters = new Set();
  }

  createFilter(filter) {
    return(<Filter
    label={filter}
    handleFilterChange={this.toggleFilter}
    key={filter} />)
  }

  createFilters() {
    let filterElements = []
    filterElements = filters.map(filter =>
      this.createFilter(filter)
    );
    return filterElements
  }

  toggleFilter(filter) {
    if (this.selectedFilters.has(filter)) {
      this.selectedFilters.delete(filter);
    } else {
      this.selectedFilters.add(filter);
    }
  }

  handleFiltersSubmit(submitEvent) {
    submitEvent.preventDefault();
    const updateFilters = this.props.updateFilters.bind(this);
    updateFilters(this.selectedFilters)
  }

  render() {
    return (
      <div className="dh-menu-nav-filters">
        <form className="filter-form" onSubmit={this.handleFiltersSubmit}>
          {this.createFilters()}
          <button className="filter-button" type="submit">Filter</button>
        </form>
      </div>
    );
  }
}

export default Filters;
