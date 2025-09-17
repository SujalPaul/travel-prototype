const admin = require("firebase-admin");
const db = admin.firestore();
const tripsCollection = db.collection("trips");

const addTrip = async (req, res) => {
  try {
    const trip = req.body;
    await tripsCollection.add(trip);
    res.status(201).json({ message: "Trip added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTrips = async (req, res) => {
  try {
    const snapshot = await tripsCollection.get();
    const trips = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addTrip, getTrips };
