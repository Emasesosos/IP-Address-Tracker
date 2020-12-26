import React from 'react';
import './error.css';

export const Error = ({ peticionError }) => {

    const { code, messages } = peticionError;

    return (
        <>
            <div className="error__container">
                <h2>Error: { code }, { messages }</h2>
            </div>
        </>
    )
}
