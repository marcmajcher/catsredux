import React, { Component } from 'react';
import Results from './Results';
import { connect } from 'react-redux';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  render() {
    return (
      <div>
        Search:
        <input
          value={this.state.query}
          onChange={e => this.setState({ query: e.target.value })}
        ></input>
        <button onClick={() => this.props.handleSearch(this.state.query)}>
          Search
        </button>
        <Results
          results={
            this.state.query
              ? this.props.cats.filter(e => e.name.includes(this.state.query))
              : []
          }
        ></Results>
      </div>
    );
  }
}

export default connect(store => store)(Search);
