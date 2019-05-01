import React, { Component} from 'react';
import './Index.scss';

class Footer extends Component {
    render() {
        const {data}=this.props
        return ( 
            <div className="footer">
                &copy; 2019 {data.title} by {data.name}
            </div>
        );
    }
}
 
export default Footer;