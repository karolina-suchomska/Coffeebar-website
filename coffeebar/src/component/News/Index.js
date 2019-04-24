import React, { Component } from 'react';
import './Index.scss';

class News extends Component {
    render() {
        return ( 
            <div id="news" className="news contain">
                <h4>Nowości CoffeeBar</h4>
                <div className="gallery">
                    <div className="card">
                        <img className="card_img" src={require("../img/coffee1.jpg")} alt=""/>
                        <div className="text_block">
                            <p>
                                Zachwyca waniliowym smakiem i delikatnym aromatem. Jej głęboki waniliowy smak to prawdziwy raj dla podniebienia.
                            </p>
                        </div>
                        <div className="card_head">Waniliowe Cappuccino</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("../img/coffee2.jpg")} alt=""/>
                        <div className="text_block">
                            <p>
                            Wyjątkowy posmak palonego karmelu idealnie uzupełnia aromatyczne espresso połączone z gładką konsystencją spienionego mleka.
                            </p>
                        </div>
                        <div className="card_head">Carmel Latte</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("../img/coffee3.jpg")} alt=""/>
                        <div className="text_block">
                            <p>
                            Pyszna kawa na bazie belgijskiej czekolady z dodatkiem bitej śmietany.
                            </p>
                        </div>
                        <div className="card_head">Czekoladowa rozkosz</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default News;