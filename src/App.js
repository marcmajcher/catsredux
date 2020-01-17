import React from 'react';
import './App.css';
import CatList from './components/CatList';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <header>CATS!</header>
      <section className="catlist">
        <CatList></CatList>
      </section>
      <section className="jelly">
        <Search></Search>
      </section>
    </div>
  );
};

export default App;
