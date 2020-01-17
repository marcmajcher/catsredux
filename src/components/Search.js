import React, { Component } from 'react';
import Results from './Results';

export default class Search extends Component {
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
        <button onClick={() => this.props.handleSearch(this.state.query)}>Search</button>
        <Results results={this.props.results}></Results>
      </div>
    );
  }
}
