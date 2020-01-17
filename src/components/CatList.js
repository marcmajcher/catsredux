import React, { Component } from 'react';
import Cat from './Cat';

export default class CatList extends Component {
  render() {
    return (
      <div>
        CatList: 
        <ul>
          {this.props.cats.map(cat => <Cat cat={cat} key={cat.name}></Cat>)}
        </ul>
      </div>
    );
  }
}
