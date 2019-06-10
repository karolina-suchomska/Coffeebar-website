import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Index.scss';

export default function About(props){
    return ( 
        <div id="about" className="about contain">
        <div className="title_about">
            <h2>{props.data.about}</h2>
            <span>{props.data.heading_about}</span>
        </div>
            <Container>
                <Row>
                    <Col>
                    <div>
                        <img className="img_about" src={require(`../../assets/${props.data.img_about1}`)} alt=''/>
                        <label className="text_about">{props.data.text_about1}</label>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <label className="text_about">{props.data.text_about2}</label>
                        <img className="img_about" src={require(`../../assets/${props.data.img_about2}`)} alt=''/>
                    </div>
                    </Col>
                    <Col >
                    <div>
                        <img className="img_about" src={require(`../../assets/${props.data.img_about3}`)} alt=''/>
                        <label className="text_about">{props.data.text_about3}</label>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
