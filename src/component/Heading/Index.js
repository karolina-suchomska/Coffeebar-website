import React, { Component } from 'react';
import './Index.scss';

class Heading extends Component {
    render() {
        const {data}=this.props
        return ( 
            <div id="home" className="heading content parallax">
                <h1>{data.title}</h1>
            </div>
        );
    }
}
 
export default Heading;
