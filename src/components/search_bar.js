import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Binds "this" to the onInputChange method
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
    // return <input onChange={event => console.log(event.target.value)} />
  }

  onInputChange(event) {
    // var message = event.target.value;
    // var encrypted = '';
    // for (var i = 0; i < message.length; ++i) {
    //   var c = message.charAt(i);
    //   var asciiValue = c.charCodeAt(0) + 5;
    //   encrypted += String.fromCharCode(asciiValue);
    // }

    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
