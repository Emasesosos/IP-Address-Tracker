import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Markers } from './Markers';

export const MapView = ({ places }) => {

    const lat = places.geometry[0];
    const lng = places.geometry[1];

    const [state, setState] = useState({
        currentLocation: {
            lat,
            lng
        },
        zoom: 17,
    });

    useEffect(() => {
        setState({
            currentLocation: {
                lat,
                lng
            },
            zoom: 17,
        });
    }, [lat, lng, places]);

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
                <Markers places={ places }/>
            </Map>
        </div>
    );
};
