import * as React from 'react';

export const DisplayMapFC = React.memo(
  () => {
    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);
  
    /**
     * Create the map instance
     * While `useEffect` could also be used here, `useLayoutEffect` will render
     * the map sooner
     */
    React.useLayoutEffect(() => {
      // `mapRef.current` will be `undefined` when this hook first runs; edge case that
      if (!mapRef.current) return;
      const H = window.H;
      const platform = new H.service.Platform({
          apikey: "XmguvpIO1zoS6Da_ObuSQod4MVbrv9wVm3-quD2S26w"
      });
      const defaultLayers = platform.createDefaultLayers();
      const hMap = new H.Map(mapRef.current as any, defaultLayers.raster.satellite.map, {
        center: { lat: 50, lng: 5 },
        zoom: 8,
        pixelRatio: window.devicePixelRatio || 1
      });
      window.addEventListener('resize', () => hMap.getViewPort().resize());
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
      
      const ui = H.ui.UI.createDefault(hMap, defaultLayers);
  
      // This will act as a cleanup to run once this hook runs again.
      // This includes when the component un-mounts
      return () => {
        window.removeEventListener("resize", () => hMap.getViewPort().resize())
        hMap.dispose();
      };
    }, [mapRef]); // This will run this hook every time this ref is updated
  
    return <div className="map" ref={mapRef} style={{ height: "500px", width: "500px" }} />;
  }
)