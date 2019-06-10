import React from 'react';
import './Index.scss'

export default function Menu() {    
    return ( 
        <nav className="menu" >
            <a className="menu_el" href="#home">CoffeeBar</a>
            <a className="menu_el" href="#news">Nowości</a>
            <a className="menu_el" href="#about">O nas</a>
            <a className="menu_el" href="#contact">Kontakt</a>
        </nav>
    );
}
 
