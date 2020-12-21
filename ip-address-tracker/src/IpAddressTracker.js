import React from 'react';
import { Hero } from './components/Hero';
import { MapView } from './components/MapView/MapView';

function IpAddressTracker() {
  return (
    <div className="ipAddressTracker__container">
      <Hero />
      <MapView />
    </div>
  );
}

export default IpAddressTracker;
