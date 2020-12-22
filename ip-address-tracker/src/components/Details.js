import React from 'react';

export const Details = ({ ipDetails }) => {

    const { ip, location, timezone, isp } = ipDetails;

    return (
        <>
            <div className="ipDetails__detail ipDetails__address">
                <p>IP ADDRESS</p>
                <span>{ip}</span>
            </div>
            <div className="ipDetails__detail ipDetails__location">
                <p>LOCATION</p>
                <span>{location}</span>
            </div>
            <div className="ipDetails__detail ipDetails__timezone">
                <p>TIMEZONE</p>
                <span>{`UTC${timezone}`}</span>
            </div>
            <div className="ipDetails__detail ipDetails__isp">
                <p>ISP</p>
                <span>{isp}</span>
            </div>
        </>
    );

};
