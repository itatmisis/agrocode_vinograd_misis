import MapGL, {
  Source,
  Layer,
  GeolocateControl,
  NavigationControl,
  
} from "@urbica/react-map-gl";
import { useLayoutEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/Map_bx.css";
export default function Map_bx({ mapStyle }) {
  const [viewport, setViewport] = useState({
    latitude: 56.009097,
    longitude: 92.872515,
    zoom: 5,
  });
  const [maps, setMaps] = useState(() => <div className="map"></div>);
  // example of coords use

  const data = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-67.13734351262877, 45.137451890638886],
          [-66.96466, 44.8097],
          [-68.03252, 44.3252],
          [-69.06, 43.98],
          [-70.11617, 43.68405],
          [-70.64573401557249, 43.090083319667144],
          [-70.75102474636725, 43.08003225358635],
          [-70.79761105007827, 43.21973948828747],
          [-70.98176001655037, 43.36789581966826],
          [-70.94416541205806, 43.46633942318431],
          [-71.08482, 45.3052400000002],
          [-70.6600225491012, 45.46022288673396],
          [-70.30495378282376, 45.914794623389355],
          [-70.00014034695016, 46.69317088478567],
          [-69.23708614772835, 47.44777598732787],
          [-68.90478084987546, 47.184794623394396],
          [-68.23430497910454, 47.35462921812177],
          [-67.79035274928509, 47.066248887716995],
          [-67.79141211614706, 45.702585354182816],
          [-67.13734351262877, 45.137451890638886],
        ],
      ],
    },
  };
  useLayoutEffect(() => {
    setMaps(() => (
      <MapGL
        mapStyle={mapStyle}
        accessToken={process.env.REACT_APP_MAPS_API_KEY}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
        className="map"
        onClick={(event) => {
              const { lngLat } = event;
              // taking coords here
              const newVewport = {
                  ...viewport,
            latitude: lngLat.lat,
            longitude: lngLat.lng
            };
            
          setViewport(newVewport);
        }}
      >
        <Source id="maine" type="geojson" data={data} />
        <Layer
          id="maine"
          type="fill"
          source="maine"
          paint={{
            "fill-color": "#088",
            "fill-opacity": 0.8,
          }}
        />
        <GeolocateControl className="geo-control" />
        <NavigationControl
          showCompass={false}
          showZoom
          position="top-right"
          mapStyle={{ background: "black" }}
        />
      </MapGL>
    ));
  }, []);

  return <section>{maps}</section>;
}
