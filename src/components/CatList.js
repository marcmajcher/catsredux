import React, { Component } from 'react';
import Cat from './Cat';
import { connect } from 'react-redux';

class CatList extends Component {
  render() {
    return (
      <div>
        CatList:
        <ul>
          {this.props.cats.map(cat => (
            <Cat cat={cat} key={cat.name}></Cat>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(store => store)(CatList);
