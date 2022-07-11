const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getTrip , createTrip , deleteTrip , createTripNote, deleteTripNote } = require('./controller')


app.get("/api/trip", getTrip);
app.post("/api/trip", createTrip);
app.delete("/api/trip/:id", deleteTrip);
app.post("/api/trip/note", createTripNote);
app.delete("/api/trip/note:id", deleteTripNote);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../info.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
})

const port = process.env.PORT || 9005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})