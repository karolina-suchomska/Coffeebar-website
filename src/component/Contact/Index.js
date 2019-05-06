import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GoogleMap from '../GoogleMap/Index';
import axios from 'axios';
import './Index.scss';

const API_PATH = 'http://localhost/api/contact/index.php';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null,
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const {data}=this.props;
    return ( 
      <div id="contact" className="contact contain">
        <Container>
          <Row>
            <Col className="box_contact">
              <div>
                <div className="heading_contact">Odwiedź nas!</div>
                <span>{data.address1}</span>
                <span>{data.address2}</span>
                <GoogleMap />
              </div>
            </Col>
            <Col className="box_contact">
              <div>
                <form action="index.php">
                <div className="heading_contact">Skontaktuj się z nami!</div>
                  <label>Imię i nazwisko</label>
                  <input type="text" id="name" name="name" 
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <label>E-mail</label>
                  <input type="email" id="email" name="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <label>Wiadomość</label>
                  <textarea id="message" name="message" 
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                  />
                  <input type="submit" 
                    onClick={e => this.handleFormSubmit(e)} 
                    value="Wyślij"
                  />
                  <div> 
                    {this.state.mailSent && <div>Dziękujemy za wiadomość.</div>}
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>                              
      </div>
    );
  }
}

