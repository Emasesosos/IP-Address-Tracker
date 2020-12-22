import React from 'react';
import { Form } from './Form';

export const Hero = ({ setParam }) => {

    return (
        <div className="hero__container">
            <h1>IP Address Tracker</h1>
            <Form setParam={ setParam }/>
        </div>
    );

};
