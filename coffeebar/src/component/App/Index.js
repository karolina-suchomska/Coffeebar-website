import React, { Component } from 'react';
import './Index.scss';
import Heading from '../Heading/Index';
import News from '../News/Index';
import About from '../About/Index';
import Contact from '../Contact/Index';
import Menu from '../Menu/Index';
import Footer from '../Footer/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Heading />
        <News />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
