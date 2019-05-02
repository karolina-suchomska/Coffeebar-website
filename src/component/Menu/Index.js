import React from 'react';
import './Index.scss'

export default function Menu() {    
    return ( 
        <div className="menu" >
            <a className="menu-el" href="#home">CoffeeBar</a>
            <a className="menu-el" href="#news">Nowości</a>
            <a className="menu-el" href="#about">O nas</a>
            <a className="menu-el" href="#contact">Kontakt</a>
        </div>
    );
}
 
