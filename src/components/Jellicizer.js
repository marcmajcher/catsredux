import React, { Component } from 'react';

export default class Jellicizer extends Component {
  render() {
    return <ul>
      {this.props.results.map(cat => <li key={cat.name}>{cat.name}
      <input type="checkbox"></input>
      </li>)}
    </ul>;
  }
}
