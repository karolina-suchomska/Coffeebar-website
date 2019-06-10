import React from 'react';
import './Index.scss';

export default function News(props) {
    return ( 
        <div id="news" className="news contain">
            <h2>{props.data.news}</h2>
            <div className="gallery">
                <div className="card">
                    <img src={require(`../../assets/${props.data.img_slider1}`)} alt=""/>
                    <h3>{props.data.title_slider1}</h3>
                    <p>{props.data.text_slider1}</p>
                </div>
                <div className="card">
                    <img src={require(`../../assets/${props.data.img_slider2}`)} alt=""/>
                    <h3>{props.data.title_slider2}</h3>
                    <p>{props.data.text_slider2}</p>
                </div>
                <div className="card">
                    <img src={require(`../../assets/${props.data.img_slider3}`)} alt=""/>
                    <h3>{props.data.title_slider3}</h3>
                    <p>{props.data.text_slider3}</p>
                </div>
            </div>
        </div>
    );
}