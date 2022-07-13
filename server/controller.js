const { appendFile } = require('fs')
const { toNumber } = require('lodash')
const trip = require('./db.json')
let globalId = 4
// require('dotenv').config

// const Sequelize = require('sequelize')

// let {CONNECTION_STRING} = process.env

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// });

module.exports = { 
   
    getTrip: (req, res) => {res.status(200).send(trip)},

    createTrip: (req, res) => {
        let { tripName, location, hotel, price, imageURL } = req.body
        let newTrip = {
            "id": globalId,
            "tripName": tripName,
            "location": location,
            "hotel": hotel,
            "price": price,
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

    createTripNote: (req, res) => {
        let { startDate, endDate, place, other } = req.body
        let newTripNote = {
            "id": globalId,
            "startDate": startDate,
            "endDate": endDate,
            "place": place,
            "other": other
        }
        openDetailsForm.push(newTripNote)
        res.status(200).send(trip)
        globalId++
    },

    deleteTripNote: (req, res) => {
        let index = tripNote.findIndex(elem => elem.id === +req.params.id)
        tripNote.splice(index, 1)
        res.status(200).send(tripNote)
    },
    updateTrip: (req, res) => {
        let { type } = req.body
        let index = trip.findIndex(elem => elem.id === +req.params.id)

        if (type === 'minus') {
            console.log(trip[index].price)
            trip[index].price = +trip[index].price
            trip[index].price -= 100;
            console.log(trip[index].price)
            res.status(200).send(trip);
        } else if(type === 'plus') {
            console.log(trip[index].price)
            trip[index].price = +trip[index].price
            trip[index].price += 100;
            res.status(200).send(trip);
        } else {
            res.status(400).send('Invalid price');
        }

    }
    
    // seed: (req, res) => {
    //     sequelize.query(`
    //         drop table if exists trip;
    //         drop table if exists note;

    //         create table trip ( 
    //             trip_id serial primary key,
    //             tripName varchar(50), 
    //             location varchar(100),
    //             hotel varchar(100),
    //             img varchar (1000)
    //             );
                
    //         create table note ( 
    //             note_id serial primary key,
    //             startDate date, 
    //             endDate date,
    //             place varchar(100),
    //             other varchar (1000)
    //             );

    //             insert into trip (tripName, location, hotel, img) 
    //             values ('Brant''s', 'Sun valley, Idaho',  'The Lodge', http://www.inidaho.com/inidaho_photos/41193.jpg'), 
    //             ('Tk''s' , 'Maui, Hawaii', 'The Four Seasons', 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/34334706.jpg?k=c969244d337edb26559306cf1abd99f9d7f79493529e1745db8f3daf7cb7073f&o=&hp=1'), 
    //             ('Jackson''s', 'Cancun, Mexico', 'The Finest', 'http://www.finestresortplayamujeres.com/images/slides/slide-48.jpg')
                
    //             insert into notes (startDate, endDate, places, other)
    //             values (10-10-22, 10-26-22,  'Sun Valley Ski Resort', 'Go explore the town at night'),
    //             (12-10-22, 12-21-22,  'rode to Hana', explore mile marker'),
    //             (11-10-22, 11-28-22,  'Xcaret Day Trip with Transportation', 'go on the zip line when you do the excursion')
                
    //     `).then(() => {
    //         console.log('DB seeded!')
    //         res.sendStatus(200)
    //     }).catch(err => console.log('error seeding DB', err))
    // },

    // getTrip: (req, res) => {
    //     sequelize.query(`
    //         select * from trip 
    //     `).then(dbRes => { 
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log(err))
    // },

    // createTrip: (req, res) => {
    //     sequelize.query(`
    //         insert into cities (trip_id, tripName, location, hotel, img) values (${trip_id}, ${tripName}, ${location}, ${hotel}, ${img})
    //     `).then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log(err))
    // }, 

    // deleteTrip: (req, res) => {
    //     sequelize.query(`
            
    //     `).then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log(err))
    // },

    // getTripNotes: (req, res) => {
    //     sequelize.query(`
    //         select * from note
    //     `).then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log(err))
    // }, 

    // createTripNote: (req, res) => {
    //     sequelize.query(`
    //     insert into cities (note_id, startDate, endDate, place, other) values (${note_id}, ${startDate}, ${endDate}, ${place}, ${other})
    //     `).then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log(err))
    // },

    // deleteTripNote: (req, res) => {
    //     sequelize.query(`
            
    //     `).then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log(err))
    // }
}