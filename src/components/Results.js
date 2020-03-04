import React, { Component } from 'react';
import Jellicizer from './Jellicizer';

export default class Results extends Component {
  render() {
    return (
      <div>
        <h2>RESULTS!</h2>
        <ul>
          {this.props.results.map(cat => (
            <Jellicizer jellicize={this.props.jellicize} cat={cat}></Jellicizer>
          ))}
        </ul>
      </div>
    );
  }
}
