import React, { Component } from 'react';

export default class CatInfo extends Component {
  render() {
    return <section className="catinfo">{this.props.cat.name}</section>;
  }
}
