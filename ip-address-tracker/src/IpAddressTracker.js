import React, { useEffect } from 'react';
import axios from 'axios';
import { Hero } from './components/Hero';
import { MapView } from './components/MapView/MapView';

function IpAddressTracker() {

  const IP_URL = "https://geo.ipify.org/api/v1?apiKey=at_6nRUxOePCdHarhVSTlWYwheZAvdEb";

  // useEffect(() => {

  //   const cancelToken1 = axios.CancelToken.source();
    
  //   const fetchData = async () => {

  //     await axios.get(IP_URL, {
  //       cancelToken: cancelToken1.token
  //     }).then(res => {
  //       console.log(res);
  //     }).catch(e => {
  //       if (axios.isCancel(e)) return;
  //       console.log(e);
  //     })

  //   };

  //   fetchData();

  //   return () => {
  //       cancelToken1.cancel();
  //   };

  // }, []);

  return (
    <div className="ipAddressTracker__container">
      <Hero />
      <MapView />
    </div>
  );
}

export default IpAddressTracker;
