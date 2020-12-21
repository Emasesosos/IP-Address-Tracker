import React from 'react';
import { Popup } from "react-leaflet";

export const MarkerPopup = ({ place }) => {

    const { name } = place;

    return (

        <Popup>
            <div>{name}</div>
        </Popup>

    );

};
