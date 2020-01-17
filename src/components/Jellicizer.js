import React, { Component } from 'react';
import { connect } from 'react-redux';

class Jellicizer extends Component {
  jellicize = () => {
    this.props.dispatch({
      type: 'JELLICIZE',
      id: this.props.cat.id,
    });
  };

  render() {
    return (
      <li key={this.props.cat.name}>
        {this.props.cat.name}
        <input type="checkbox" onChange={this.jellicize}></input>
      </li>
    );
  }
}

export default connect(store => store)(Jellicizer);
