import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return ( 
        <div id="about" className="about contain">
        <div className="title_about">
            <h3>Nasza misja</h3>
            <p>Jakość, szacunek i pasja, która wydobywa z kawy to co najlepsze.</p>
        </div>
            <Container className="about_wazne">
                <Row>
                    <Col >
                    <div>
                        <img src={require('./img/img1.jpg')} className="about_img" alt=''/>
                        <label className="signatures">Nasza kawa posiada certyfikat Ekogwarancji, co oznacza, że do produkcji nie były wykorzystywane sztuczne nawozy, kawa nie była modyfikowana genetycznie. To pozwala na wydobycie dodatkowych walorów smakowych i zaproponowanie wam naprawdę aromatycznego, gęstego espresso z aksamitną pianką, na bazie którego powstają kolejne wariacje kawowe.</label>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <label className="signatures" >Dbamy o dobre samopoczucie zarówno klientów, jak i naszych pracowników. Dostrzegamy potrzeby każdej ze stron i staramy się wychodzić im naprzeciw. Goście odwiedzający kawiarnie powinni czuć się jak w domu – dokładamy do tego wszelkich starań.</label>
                        <img src={require('./img/img2.jpg')} className="about_img" alt=''/>
                    </div>
                    </Col>
                    <Col >
                    <div>
                        <img src={require('./img/img3.jpg')} className="about_img" alt=''/>
                        <label className="signatures">Nasze kawiarnie traktujemy jak jedną z najważniejszych przestrzeni, zaraz po domowym zaciszu oraz miejscu pracy. Chcemy, aby były pełne wspaniałych spotkań i wyjątkowych historii. Przytulne wnętrza Columbus Coffee idealnie dopełniają smak kubka kawy, niezależnie od tego, czy szukasz w nich chwili relaksu, czy skupienia przy pracy.</label>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default About;