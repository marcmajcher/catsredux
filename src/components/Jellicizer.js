import React, { Component } from 'react';

export default class Jellicizer extends Component {
  render() {
    return (
      <li key={this.props.cat.name}>
        {this.props.cat.name}
        <input type="checkbox" onChange={() => this.props.jellicize(this.props.cat.id)}></input>
      </li>
    );
  }
}
