import React from 'react';

export const DisplayMapFC =
  () => {
    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);
  
    /**
     * Create the map instance
     * While `useEffect` could also be used here, `useLayoutEffect` will render
     * the map sooner
     */

    React.useEffect(() => {
      // `mapRef.current` will be `undefined` when this hook first runs; edge case that
      if (!mapRef.current) return;
      const H = window.H;
      var platform = new H.service.Platform({
        apikey: "XmguvpIO1zoS6Da_ObuSQod4MVbrv9wVm3-quD2S26w",
      });
      var defaultLayers = platform.createDefaultLayers({
        lg: "uk"
      });
      
      //Step 2: initialize a map - this map is centered over Europe
      var map = new H.Map(mapRef.current as any,
        defaultLayers.vector.normal.map,{
        center: {lat:50, lng:5},
        zoom: 4,
        layers: [
          defaultLayers.raster.normal.map
        ],
        pixelRatio: window.devicePixelRatio || 1
      });
    
      // add a resize listener to make sure that the map occupies the whole container
      // window.addEventListener('resize', () => map.getViewPort().resize());
      
      //Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      // Create the default UI components
      var ui = H.ui.UI.createDefault(map, defaultLayers, "en-US");
      ui.removeControl("scalebar")
      // ui.addControl("name", )
      // const platform = new H.service.Platform({
      //     apikey: "XmguvpIO1zoS6Da_ObuSQod4MVbrv9wVm3-quD2S26w"
      // });
      // const defaultLayers = platform.createDefaultLayers();
      // const hMap = new H.Map(mapRef.current as any, defaultLayers.vector.normal.map, {
      //   center: { lat: 50, lng: 5 },
      //   zoom: 8,
      //   pixelRatio: window.devicePixelRatio || 1
      // });
      // window.addEventListener('resize', () => hMap.getViewPort().resize());
      // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
      
      // const ui = H.ui.UI.createDefault(hMap, defaultLayers);
      // hMap.
      // hMap.getViewModel().setLookAtData({
      //   tilt: 45,
      //   heading: 60
      // });

      // This will act as a cleanup to run once this hook runs again.
      // This includes when the component un-mounts
      return () => {
        // window.removeEventListener("resize", () => map.getViewPort().resize())
        map.dispose();
      };
    }, [mapRef]); // This will run this hook every time this ref is updated
  
    return <div>
      <div className="map" ref={mapRef} style={{ height: "750px", width: "100%" }} />
      <button onClick={() => console.log(mapRef.current)}></button>
    </div>;
  }