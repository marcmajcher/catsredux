import React, { useState } from 'react';
import './App.css';
import CatList from './components/CatList';
import Search from './components/Search';

const catsObj = {
  cats: [
    { id: 1, name: 'kitty', jelly: false },
    { id: 2, name: 'green kitty', jelly: false },
    { id: 3, name: 'ellie', jelly: true },
    { id: 4, name: 'deborah', jelly: false },
    { id: 5, name: 'pebble ephram', jelly: false },
    { id: 6, name: 'marigold', jelly: false },
  ],
  dogs: [],
};

const App = () => {
  const [cats, setCats]= useState(catsObj)

function jellicize() {
  setCats()
}

  return (
    <div className="App">
      <header>CATS!</header>
      <section className="catlist">
        <CatList cats={cats}></CatList>
      </section>
      <section className="jelly">
        <Search jellicize={jellicize} cats={cats}></Search>
      </section>
    </div>
  );
};

export default App;
