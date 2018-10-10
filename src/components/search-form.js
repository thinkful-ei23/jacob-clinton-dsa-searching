import React, { Component } from 'react';

class SearchForm extends Component {
  onSubmit(event) {
    event.preventDefault();
    const num = this.textInput.value;
    this.props.findNum(num);
    this.textInput.value = '';
  }
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          ref={input => this.textInput = input}
          placeholder="Number to search"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
