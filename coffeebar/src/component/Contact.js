import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
        }
      }

      handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
      }

    render() {
        return ( 
            <div className="contact container">
                <p>Kontakt</p>
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
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Contact;