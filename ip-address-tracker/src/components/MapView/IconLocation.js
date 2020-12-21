import L from 'leaflet';
import room from './../../assets/icon-location.svg';

export const IconLocation = L.icon({

    iconUrl: room,
    iconRetinaUrl: room,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
    
});
