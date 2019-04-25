import React, { Component } from 'react';
import './Index.scss';

class News extends Component {
    render() {
        return ( 
            <div id="news" className="news contain">
                <h2>Nowości CoffeeBar</h2>
                <div className="gallery">
                    <div className="card">
                        <img className="card_img" src={require("../img/coffee1.jpg")} alt=""/>
                        <div className="card_text">
                        Zachwyca waniliowym smakiem i delikatnym aromatem. Jej głęboki waniliowy smak to prawdziwy raj dla podniebienia.
                        </div>
                        <div className="card_head">Waniliowe Cappuccino</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("../img/coffee2.jpg")} alt=""/>
                        <div className="card_text">
                            Wyjątkowy posmak palonego karmelu idealnie uzupełnia aromatyczne espresso połączone z gładką konsystencją spienionego mleka.
                        </div>
                        <div className="card_head">Carmel Latte</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("../img/coffee3.jpg")} alt=""/>
                        <div className="card_text">
                            Pyszna kawa na bazie belgijskiej czekolady z dodatkiem bitej śmietany.
                        </div>
                        <div className="card_head">Czekoladowa rozkosz</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default News;