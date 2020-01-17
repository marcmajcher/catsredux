import React, { Component } from 'react';
import './App.css';
import CatList from './components/CatList';
import Search from './components/Search';

const cats = [
  { name: 'kitty' },
  { name: 'green kitty' },
  { name: 'ellie' },
  { name: 'deborah' },
  { name: 'pebble ephram' },
  { name: 'marigold' },
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats,
      results: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header>CATS!</header>
        <section className="catlist">
          <CatList cats={cats}></CatList>
        </section>
        <section className="jelly">
          <Search
            handleSearch={query =>
              this.setState({
                results: this.state.cats.filter(e => e.name.includes(query)),
              })
            }
            results={this.state.results}
          ></Search>
        </section>
      </div>
    );
  }
}
