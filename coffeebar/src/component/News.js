import React, { Component } from 'react';

class News extends Component {
    render() {
        return ( 
            <div id="news" className="news contain">
                <h4>Nowości CoffeeBar</h4>
                <div className="gallery">
                    <div className="card">
                        <img className="card_img" src={require("./img/coffee1.jpg")} alt=""/>
                        <div className="card_head">Capuccino</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("./img/coffee2.jpg")} alt=""/>
                        <div className="card_head">Latte</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("./img/coffee3.jpg")} alt=""/>
                        <div className="card_head">Czekoladowa rozkosz</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default News;