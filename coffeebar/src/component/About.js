import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return ( 
        <div className="about contain">
        <div className="title_about">
            <h3>Nasza misja</h3>
            <p>Jakość, szacunek i pasja, która wydobywa z kawy to co najlepsze.</p>
        </div>
            <Container className="about_wazne">
                <Row>
                    <Col >
                    <div>
                        <img src={require('./img/img1.jpg')} alt=''/>
                        Używamy tylko najlepszych gatunków kawy.
                    </div>
                    </Col>
                    <Col>2 of 3 (wider)</Col>
                    <Col >
                        Element 2
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default About;