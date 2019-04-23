import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';

const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php';

class Contact extends Component {
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
        return ( 
            <div id="contact" className="contact contain">
                <h4>Kontakt</h4>
                <div>
                    <form action="#">
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
                        {this.state.mailSent &&
                            <div>Thank you for contcting us.</div>
                        }
                        </div>
                    </form>
                </div>
              <Footer />
            </div>
            
        );
    }
}
 
export default Contact;