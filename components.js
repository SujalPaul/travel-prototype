import React, { useState } from "react";
import axios from "axios";

const TripForm = () => {
  const [trip, setTrip] = useState({
    origin: "",
    destination: "",
    travelMode: "",
    departureTime: "",
    purpose: ""
  });

  const handleChange = e => setTrip({ ...trip, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/trips", trip);
      alert("Trip logged!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="origin" placeholder="Origin" onChange={handleChange} required/>
      <input name="destination" placeholder="Destination" onChange={handleChange} required/>
      <input name="travelMode" placeholder="Travel Mode" onChange={handleChange} required/>
      <input name="departureTime" type="datetime-local" onChange={handleChange} required/>
      <input name="purpose" placeholder="Purpose" onChange={handleChange} required/>
      <button type="submit">Log Trip</button>
    </form>
  );
};

export default TripForm;
