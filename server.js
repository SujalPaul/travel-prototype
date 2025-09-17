const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example trip data (India only)
const trips = [
  {
    id: 1,
    destination: "Goa",
    startDate: "2025-12-20",
    endDate: "2025-12-27",
    activities: ["Beach visit", "Water sports", "Cruise party"]
  },
  {
    id: 2,
    destination: "Manali",
    startDate: "2026-01-05",
    endDate: "2026-01-12",
    activities: ["Skiing", "Snow trekking", "Hot springs"]
  },
  {
    id: 3,
    destination: "Jaipur",
    startDate: "2026-02-10",
    endDate: "2026-02-15",
    activities: ["Amber Fort", "City Palace", "Hawa Mahal"]
  }
];

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Travel Prototype API for India 🇮🇳" });
});

app.get("/trips", (req, res) => {
  res.json(trips);
});

app.get("/trips/:id", (req, res) => {
  const trip = trips.find(t => t.id === parseInt(req.params.id));
  if (trip) res.json(trip);
  else res.status(404).json({ error: "Trip not found" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
