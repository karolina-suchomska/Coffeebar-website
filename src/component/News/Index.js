import React from 'react';
import './Index.scss';

export default function News(props) {
    return ( 
        <div id="news" className="news contain">
            <h2>{props.data.news}</h2>
            <div className="gallery">
                <div className="card">
                    <img className="card_img" src={require(`../../Assets/Images/${props.data.img_slider1}`)} alt=""/>
                    <div className="card_head">{props.data.title_slider1}</div>
                    <div className="card_text">{props.data.text_slider1}</div>
                </div>
                <div className="card">
                    <img className="card_img" src={require(`../../Assets/Images/${props.data.img_slider2}`)} alt=""/>
                    <div className="card_head">{props.data.title_slider2}</div>
                    <div className="card_text">{props.data.text_slider2}</div>
                </div>
                <div className="card">
                    <img className="card_img" src={require(`../../Assets/Images/${props.data.img_slider3}`)} alt=""/>
                    <div className="card_head">{props.data.title_slider3}</div>
                    <div className="card_text">{props.data.text_slider3}</div>
                </div>
            </div>
        </div>
    );
}