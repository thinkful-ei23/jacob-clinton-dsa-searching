import React, { Component } from 'react';
import { dataArray } from '../data';
import SearchForm from './search-form';

class LinearSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      answer: null
    }
  }
  findNum(num) {
    console.log(`findNum was called with ${num}`);
    this.setState({
      number: num
    });
    for (let i=0; i<dataArray.length; i++) {
      if (dataArray[i] === num) {
        this.setState({
          answer: i + 1
        });
      }
    }
  }

  render() {
    let prettyArray = dataArray.map(num => {
      return (
        `${num}, `
      )
    });

    return (
      <section>
        <h2>Linear Search Test</h2>
        <section id="array">
          <h3>Dataset:</h3>
          {prettyArray}
        </section>
        <SearchForm findNum={num => this.findNum(num)}/>
        <p>{this.state.answer ? `${this.state.number} was found on try #${this.state.answer}` : ``}</p>
      </section>
    );
  }
}

export default LinearSearch;
