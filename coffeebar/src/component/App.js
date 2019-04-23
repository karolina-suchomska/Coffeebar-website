import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import News from './News';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Heading />
        <News />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
