const express = require("express");
const cors = require("cors");
const tripsRoutes = require("./routes/trips");
require("dotenv").config();
const admin = require("firebase-admin");

const app = express();
app.use(cors());
app.use(express.json());

// Firebase admin initialization
const serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use("/api/trips", tripsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
