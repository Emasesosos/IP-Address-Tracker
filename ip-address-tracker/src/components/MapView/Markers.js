import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { MarkerPopup } from './MarkerPopup';

export const Markers = () => {

    const places = [{
        name: 'New',
        geometry: ['52.52437','13.41053'],
    }]

    const markers = places.map((place, i) => {
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
