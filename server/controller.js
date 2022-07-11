const { appendFile } = require('fs')
const trip = require('./db.json')
let globalId = 4

module.exports = { 
   
    getTrip: (req, res) => {res.status(200).send(trip)},

    createTrip: (req, res) => {
        let { tripName, location, hotel, imageURL } = req.body
        let newTrip = {
            "id": globalId,
            "tripName": tripName,
            "location": location,
            "hotel": hotel,
            "imageURL": imageURL
        }
        trip.push(newTrip)
        res.status(200).send(trip)
        globalId++
    },
    deleteTrip: (req, res) => {
        let index = trip.findIndex(elem => elem.id === +req.params.id)
        trip.splice(index, 1)
        res.status(200).send(trip)
    },

    updateTrip: (req, res) => {
        let { type } = req.body
        let index = trip.findIndex(elem => elem.id === +req.params.id)
        
        btns-container.addEventListener('click', info.html )

    },
    
    createTripNote: (req, res) => {
        let { startDate, endDate, place, other } = req.body
        let newTripNote = {
            "id": globalId,
            "startDate": startDate,
            "endDate": endDate,
            "place": place,
            "other": other
        }
        trip.push(newTripNote)
        res.status(200).send(trip)
        globalId++
    },

    deleteTripNote: (req, res) => {
        let index = tripNote.findIndex(elem => elem.id === +req.params.id)
        tripNote.splice(index, 1)
        res.status(200).send(tripNote)
    }
    

}

