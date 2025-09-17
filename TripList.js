import React, { useEffect, useState } from "react";
import axios from "axios";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/trips").then(res => setTrips(res.data));
  }, []);

  return (
    <div>
      <h2>Logged Trips</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>{trip.origin} → {trip.destination} ({trip.travelMode})</li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
