import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const HeritageMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  const heritageSites = [
    { name: "Taj Mahal", lat: 27.1751, lng: 78.0421 },
    { name: "Qutub Minar", lat: 28.5244, lng: 77.1855 }
  ];

  return (
    <GoogleMap zoom={5} center={{ lat: 20.5937, lng: 78.9629 }} mapContainerStyle={{ width: "100%", height: "400px" }}>
      {heritageSites.map((site, idx) => <Marker key={idx} position={{ lat: site.lat, lng: site.lng }} title={site.name} />)}
    </GoogleMap>
  );
};

export default HeritageMap;
