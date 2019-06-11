import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Index.scss';

export default function About(props){
    return ( 
        <div id="about" className="about contain">
            <section>
                <h2>{props.data.about}</h2>
                <p>{props.data.heading_about}</p>
            </section>

            <Container>
                <Row>
                    <Col>
                        <img className="img_about" src={require(`../../Assets/${props.data.img_about1}`)} alt=''/>
                        <label className="text_about">{props.data.text_about1}</label>
                    </Col>
                    <Col>
                        <label className="text_about">{props.data.text_about2}</label>
                        <img className="img_about" src={require(`../../Assets/${props.data.img_about2}`)} alt=''/>
                    </Col>
                    <Col >
                        <img className="img_about" src={require(`../../Assets/${props.data.img_about3}`)} alt=''/>
                        <label className="text_about">{props.data.text_about3}</label>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
