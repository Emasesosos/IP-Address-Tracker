import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { MarkerPopup } from './MarkerPopup';

export const Markers = ({ places }) => {

    const ubicacion = [places];

    const markers = ubicacion.map((place, i) => {
        return <Marker
                    key={ i }
                    position={ place.geometry }
                    icon={ IconLocation }
                >
                    <MarkerPopup place={ place }/>
                </Marker>
    });

    return (markers);

};
