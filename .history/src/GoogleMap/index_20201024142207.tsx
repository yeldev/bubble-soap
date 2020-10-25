import React, { useRef } from 'react'
import { useLoadScript } from '../hooks/useLoadScript';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const { success, error } = useLoadScript({
    apiKey: "AIzaSyCUeLKzSNJCuQIumo_IJST_WxCqdvGeahc",
    libraries: ["places", "geometry"]
  });
  alert(success);
  return (
    <div ref="map" style={{ width: 300, height: 300, margin: "0px auto" }} />
  )
}

export default GoogleMap
