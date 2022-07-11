const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getTrip , createTrip , deleteTrip , createTripNote, deleteTripNote } = require('./controller')


app.get("/api/trip", getTrip);
app.post("/api/trip", createTrip);
app.delete("/api/trip/:id", deleteTrip);
// app.put("/api/guardian/:id", updateTrip)
app.post("/api/trip/note", createTripNote);
app.delete("/api/trip/note:id", deleteTripNote);

app.listen(9005, () => console.log("Server running on 9005"));