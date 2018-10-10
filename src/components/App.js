import React, { Component } from 'react';
import LinearSearch from './linear-search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Searching Algorithm Tests</h1>
        <LinearSearch />
      </div>
    );
  }
}

export default App;
