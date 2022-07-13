const express = require("express");
const cors = require("cors");
const path = require("path")

const app = express();

app.use(cors());

app.use(express.json());

const { seed, getTrip , createTrip , updateTrip , deleteTrip , createTripNote, deleteTripNote } = require('./controller')


app.get("/api/trip", getTrip);
app.post("/api/trip", createTrip);
app.delete("/api/trip/:id", deleteTrip);
app.put("/api/trip/:id", updateTrip);
app.post("/api/trip/note", createTripNote);
app.delete("/api/trip/note:id", deleteTripNote);
// app.post('/seed', seed);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/api/trip/details', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/details.html'))
})

app.get('/api/trip/book', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/book.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.js'))
})

app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
})

const port = process.env.PORT || 3005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})