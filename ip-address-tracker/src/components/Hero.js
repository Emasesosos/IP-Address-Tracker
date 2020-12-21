import React from 'react';
import { Form } from './Form';
import { IpDetails } from './IpDetails';

export const Hero = () => {

    return (
        <div className="hero__container">
            <h1>IP Address Tracker</h1>
            <Form />
            <IpDetails />
        </div>
    );

};
