import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Markers } from './Markers';

export const MapView = () => {

    const [state, setState] = useState({
        currentLocation: {
            lat: '52.52437',
            lng: '13.41053'
        },
        zoom: 14,
    });

    return (
        <div className="mapView__container">
            <Map
                center={state.currentLocation}
                zoom={state.zoom}
            >
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Markers />
            </Map>
        </div>
    );
};
