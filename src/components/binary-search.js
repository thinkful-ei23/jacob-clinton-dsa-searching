import React, { Component } from 'react';
import { dataArray } from '../data';
import SearchForm from './search-form';

class BinarySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [...dataArray].sort((a,b) => a - b),
      number: null,
      answer: null,
      found: null
    }
  }
  findNum(num) {
    this.setState({
      number: null,
      answer: null
    });
    this.setState({
      number: num
    });
    num = num|0;
    let count = 0;
    this.binarySearch(count, this.state.array, num);
  }
  binarySearch(count, array, value, start = 0, end = array.length -1) {
    count++;
    if (start > end) {
      console.log('did not find', count)
      this.setState({
        answer: count,
        found: false
      });
      return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    console.log('item, value', item, value)
    if (item === value) {
      console.log('item === value', count)
      this.setState({
        answer: count,
        found: true
      });
      return index;
    }
    else if (item < value) {
        return this.binarySearch(count, array, value, index + 1, end);
    }
    else if (item > value) {
        return this.binarySearch(count, array, value, start, index - 1);
    }
};
  
  render() {
    
    let sortedData = this.state.array.map(num => {
      return `${num}, `;  
    });
    return (
      <section>
        <h2>Binary Search Test</h2>
        <section id="array">
          <h3>Sorted Dataset:</h3>
          {sortedData}
        </section>
        <SearchForm findNum={num => this.findNum(num)}/>
        <p>{this.state.answer && this.state.found === true ? `${this.state.number} was found on try #${this.state.answer}` : ``}</p>
        <p>{this.state.found == false ? `${this.state.number} was not found in the array. The algorithm ran ${this.state.answer} times before it came it this conclusion` : ''}</p>
      </section>
    );
  }
}

export default BinarySearch;