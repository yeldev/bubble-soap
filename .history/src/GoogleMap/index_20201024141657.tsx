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
    <div>
      
    </div>
  )
}

export default GoogleMap
