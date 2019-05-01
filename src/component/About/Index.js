import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Index.scss';

class About extends Component {
    render() {
        const {data}=this.props
        return ( 
            <div id="about" className="about contain">
            <div className="title_about">
                <h2>{data.about}</h2>
                <p>{data.heading_about}</p>
            </div>
                <Container>
                    <Row>
                        <Col >
                        <div>
                            <img className="img_about" src={require('../../Assets/Images/img1.jpg')} alt=''/>
                            <label className="text_about">{data.text_about1}</label>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <label className="text_about">{data.text_about2}</label>
                            <img className="img_about" src={require('../../Assets/Images/img2.jpg')} alt=''/>
                        </div>
                        </Col>
                        <Col >
                        <div>
                            <img className="img_about" src={require('../../Assets/Images/img3.jpg')} alt=''/>
                            <label className="text_about">{data.text_about3}</label>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default About;