import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Hero } from './components/Hero';
import { IpDetails } from './components/IpDetails';
import { MapView } from './components/MapView/MapView';

function IpAddressTracker() {

  const [param, setParam] = useState({});

  const [peticionError, setPeticionError] = useState({});

  const [ipDetails, setIpDetails] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
    loading: false
  });

  const [places, setPlaces] = useState([{
    name: '',
    geometry: []
  }]);

  const IP_URL = "https://geo.ipify.org/api/v1?apiKey=at_MmWWTC0uzQ1BJWJfgtshFaaQsGj33";

  useEffect(() => {

    const cancelToken1 = axios.CancelToken.source();

    const fetchData = async () => {
      await axios.get(IP_URL, {
        cancelToken: cancelToken1.token
      }).then(res => {
        const { city, country, postalCode } = res.data.location;
        setIpDetails({
          ip: res.data.ip,
          location: city + ', ' + country + ' ' + postalCode,
          timezone: res.data.location.timezone,
          isp: res.data.isp,
          loading: true
        });
        setPlaces({
          name: city,
          geometry: [res.data.location.lat, res.data.location.lng]
        });
      }).catch(e => {
        if (axios.isCancel(e)) return;
        console.log(e);
      });
    };

    fetchData();

    return () => {
        cancelToken1.cancel();
    };

  }, []);

  useEffect(() => {

    if(Object.keys(param).length === 0) return null;

    setIpDetails({
      loading: false
    });

    const cancelToken2 = axios.CancelToken.source();

    const fetchData = async () => {
      await axios.get(`${IP_URL}&ipAddress=${param}&domain=${param}`, {
        cancelToken: cancelToken2.token
      }).then(res => {
        const { city, country, postalCode } = res.data.location;
        setIpDetails({
          ip: res.data.ip,
          location: city + ', ' + country + ' ' + postalCode,
          timezone: res.data.location.timezone,
          isp: res.data.isp,
          loading: true
        });
        setPlaces({
          name: city,
          geometry: [res.data.location.lat, res.data.location.lng]
        });
        setPeticionError({
          error: false
        });
      }).catch(e => {
        if (axios.isCancel(e)) return;
        const { code, messages } = e.response.data;
        setIpDetails({
          loading: true
        });
        setPeticionError({
          error: true,
          code,
          messages
        });
      });
    };

    fetchData();

    return () => {
        cancelToken2.cancel();
    };

  }, [param]);

  if(!places.geometry) return null;

  return (
    <div className="ipAddressTracker__container">
      <Hero setParam={ setParam }/>
      <IpDetails 
        ipDetails={ ipDetails } 
        peticionError={ peticionError }
      />
      <MapView places={ places }/>
    </div>
  );

}

export default IpAddressTracker;
