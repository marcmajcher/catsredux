import React, { Component } from 'react';
import Jellicizer from './Jellicizer';

export default class Results extends Component {
  render() {
    return (
      <div>
        RESULTS!
        <Jellicizer results={this.props.results}></Jellicizer>
      </div>
    );
  }
}
