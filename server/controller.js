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
    
    // updateGuardian: (req, res) => {
    //     let { type } = req.body
    //     let index = guardian.findIndex(elem => elem.id === +req.params.id)

    //     if (type === 'minus' && guardian[index].rating >= 1) {
    //         guardian[index].rating -= 1;
    //         res.status(200).send(guardian);
    //     } else if(type === 'plus' && guardian[index].rating < 10) {
    //         guardian[index].rating += 1;
    //         res.status(200).send(guardian);
    //     } else {
    //         res.status(400).send('Invalid rating');
    //     }

    // },

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

