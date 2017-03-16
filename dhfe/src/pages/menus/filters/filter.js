import React, { Component, PropTypes } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggleFilterChange = this.toggleFilterChange.bind(this);
  }

  state = {
    isChecked: false
  }

  toggleFilterChange() {
    const label = this.props.label;
    const handleFilterChange = this.props.handleFilterChange.bind(this);

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleFilterChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
    let classname = "filter " + label;
    return (
      <label className={classname}>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleFilterChange}
        />
        {label}
      </label>
    );
  }
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
}

export default Filter;
