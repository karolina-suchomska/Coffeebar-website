import React from 'react';
import './Index.scss';

export default function Footer(props) {
    return ( 
        <div className="footer">
            &copy; 2019 {props.data.title} by {props.data.name}
        </div>
    );
}
 