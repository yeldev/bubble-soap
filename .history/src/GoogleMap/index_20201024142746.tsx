import React, { useRef } from 'react'
import { useLoadScript } from '../hooks/useLoadScript';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const { success, error } = useLoadScript({
    apiKey: "AIzaSyBmngvM3ZaPC-JLAX4X0VmZ_Ec4rLUVH6M",
    libraries: ["places", "geometry"]
  });

  return (
    <div ref={mapRef} style={{ width: 300, height: 300, margin: "0px auto" }} />
  )
}

export default GoogleMap
