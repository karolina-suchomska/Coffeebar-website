import React, { Component } from 'react';

class Menu extends Component {    
    
    render() {
        return ( 
            <div className="menu" >
                <a className="menu-el" href="#home" ref="home">Home</a>
                <a className="menu-el" href="#news">Nowości</a>
                <a className="menu-el" href="#about">O nas</a>
                <a className="menu-el" href="#contact">Kontakt</a>
            </div>
         );
    }
}
 
export default Menu;