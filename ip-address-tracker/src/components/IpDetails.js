import React from 'react'

export const IpDetails = () => {

    return (
        <div className="ipDetails__container">
            <div className="ipDetails__details">
                <div className="ipDetails__detail ipDetails__address">
                    <p>IP ADDRESS</p>
                    <span>192.212.174.101</span>
                </div>
                <div className="ipDetails__detail ipDetails__location">
                    <p>LOCATION</p>
                    <span>Brooklyn, NY 10001</span>
                </div>
                <div className="ipDetails__detail ipDetails__timezone">
                    <p>TIMEZONE</p>
                    <span>UTC - 05:00</span>
                </div>
                <div className="ipDetails__detail ipDetails__isp">
                    <p>ISP</p>
                    <span>SpaceX Starlink</span>
                </div>
            </div>
        </div>
    );

};
