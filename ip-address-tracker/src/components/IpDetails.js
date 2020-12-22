import React from 'react'
import { Details } from './Details';
import { Spinner } from './Spinner/Spinner';

export const IpDetails = ({ ipDetails }) => {

    const { loading } = ipDetails;

    return (
        <div className="ipDetails__container">
           <div className="ipDetails__details">
               { loading === false ? <Spinner /> : <Details ipDetails={ ipDetails }/>}
            </div> 
        </div>
    );

};
