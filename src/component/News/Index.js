import React, { Component } from 'react';
import './Index.scss';

class News extends Component {
    render() {
        const {data}=this.props
        return ( 
            <div id="news" className="news contain">
                <h2>{data.news}</h2>
                <div className="gallery">
                    <div className="card">
                        <img className="card_img" src={require('../../Assets/Images/coffee1.jpg')} alt=""/>
                        <div className="card_head">{data.title_slider1}</div>
                        <div className="card_text">{data.text_slider1}</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("../../Assets/Images/coffee2.jpg")} alt=""/>
                        <div className="card_head">{data.title_slider2}</div>
                        <div className="card_text">{data.text_slider2}</div>
                    </div>
                    <div className="card">
                        <img className="card_img" src={require("../../Assets/Images/coffee3.jpg")} alt=""/>
                        <div className="card_head">{data.title_slider3}</div>
                        <div className="card_text">{data.text_slider3}</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default News;