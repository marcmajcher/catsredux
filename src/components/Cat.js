import React, { Component } from 'react';
import CatInfo from './CatInfo';

export default class Cat extends Component {
  render() {
    return (
      <li>
        I'm a Cat named:
        <CatInfo cat={this.props.cat}></CatInfo>
      </li>
    );
  }
}
