import React from "react";
import TripForm from "./components/TripForm";
import TripList from "./components/TripList";
import HeritageMap from "./components/HeritageMap";

function App() {
  return (
    <div>
      <h1>Smart Travel & Heritage Explorer</h1>
      <TripForm />
      <TripList />
      <HeritageMap />
    </div>
  );
}

export default App;
