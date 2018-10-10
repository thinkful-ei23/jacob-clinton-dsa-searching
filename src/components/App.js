import React, { Component } from 'react';
import LinearSearch from './linear-search';
import BinarySearch from './binary-search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Searching Algorithm Tests</h1>
        <LinearSearch />
        <BinarySearch />
      </div>
    );
  }
}

export default App;
