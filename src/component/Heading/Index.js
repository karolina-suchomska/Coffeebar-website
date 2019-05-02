import React from 'react';
import './Index.scss';

export default function Heading(props) {
    return ( 
        <div id="home" className="heading content parallax">
            <h1>{props.data.title}</h1>
        </div>
    );
}
 

