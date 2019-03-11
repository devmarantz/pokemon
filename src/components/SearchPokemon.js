import React, { Component } from 'react';

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTextValue: ''   
    }
  }

  handleChange = event => {
    this.setState({ searchTextValue: event.target.value });
  }

  handleSearch = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTextValue);
  }

  render() {
    return (
      <div className="search-bar">
      <form onSubmit={this.handleSearch}> 
        <input type="text" name="search" onChange={this.handleChange} value={this.state.searchTextValue} placeholder="Search a Pokemon"></input>
        <button>🔎</button>
      </form>
      </div>
    )
  }
}

export default SearchPokemon;