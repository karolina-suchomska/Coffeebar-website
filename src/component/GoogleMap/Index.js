import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Index.scss';

export class GoogleMap extends Component {
    render() {
        return ( 
            <div className='google_map'>
                <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{
                lat: 52.234899,
                lng: 20.992110
                }}
                />
            </div>
         );
    }
}
 
export default GoogleApiWrapper(
    (props) => ({
        apiKey: props.apiKey
    }
))(GoogleMap);