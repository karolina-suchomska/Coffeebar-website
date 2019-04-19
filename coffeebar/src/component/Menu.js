import React, { Component } from 'react';

class Menu extends Component {


    render() {
        return ( 
            <div className="menu" >
                <section id="home" ref="home">Home</section>
                <section id="news">Nowości</section>
                <section id="about">O nas</section>
                <section id="contact">Kontakt</section>
            </div>
         );
    }
}
 
export default Menu;