import React, { useRef, useLayoutEffect  } from 'react';
import './App.css';

function App() {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "Gr0J1bUdaVrPys2cuj5rCfzaU1iS8k0E1ONjDnp9-10"
    });
    const defaultLayers = platform.createDefaultLayers();
    if (!mapRef.current) return; 
    const hMap = new H.Map(mapRef.current as any, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    // const ui = H.ui.UI.createDefault(hMap, defaultLayers);
    
    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
}

export default App;
