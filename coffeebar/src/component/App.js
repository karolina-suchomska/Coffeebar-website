import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import News from './News';
import About from './About';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <News />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
