import React, { Component } from 'react';
import './Index.scss';
import Data from '../../Data/data.json'
import Heading from '../Heading/Index';
import News from '../News/Index';
import About from '../About/Index';
import Contact from '../Contact/Index';
import Menu from '../Menu/Index';
import Footer from '../Footer/Index';

class App extends Component {
  render() {
    return (
      <div>
      {Data.map((item, index) => {
          return (
            <div className="App" key={index} >
              <Menu />
              <Heading data={item} />
              <News data={item} />
              <About data={item}/>
              <Contact data={item}/>
              <Footer data={item}/>
            </div>
          );
        })} 
      </div>
    );
  }
}

export default App;
