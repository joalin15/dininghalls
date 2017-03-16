import React, { Component } from 'react';
import Header from './common/header';
import Navigation from './common/navigation';
import './styles/base/base.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
