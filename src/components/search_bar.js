import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Binds "this" to the onInputChange method
    this.onInputChange = this.onInputChange.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search..."
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.handleKeyPressed}
        />
        <span
          className="search-btn"
          onClick={() => this.props.onSearchBtnClick(this.state.term)}
        >
          Search
        </span>
      </div>
    );
    // return <input onChange={event => console.log(event.target.value)} />
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchBtnClick(term);
  }

  handleKeyPressed = event => {
    if (event.charCode === 13) {
      this.props.onSearchBtnClick(this.state.term);

      event.value = '';
      this.setState({ term: '' });
    }
  };
}

export default SearchBar;
