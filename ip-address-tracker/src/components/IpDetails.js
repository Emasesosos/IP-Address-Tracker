import React from 'react'
import { Details } from './Details';
import { Error } from './Error/Error';
import { Spinner } from './Spinner/Spinner';

export const IpDetails = ({ ipDetails, peticionError }) => {

    const { loading } = ipDetails;
    const { error } = peticionError;

    return (
        <div className="ipDetails__container">
           <div className="ipDetails__details">
                { 
                    loading === false ? <Spinner /> 
                        : (error === true ? <Error peticionError={ peticionError }/> 
                            : <Details ipDetails={ ipDetails }/>) 
                }
            </div> 
        </div>
    );

};
