const tripContainer = document.getElementById("trip-container")
const form = document.querySelector('form')
const editForm = document.querySelector('#edit-form')

const baseURL = `/api/trip`

const tripCallback = ({ data: trip }) => displaytrip(trip)
const errCallback = err => console.log(err)


const getAllTrip = () => axios.get(baseURL).then(tripCallback).catch(errCallback)
const createTrip = body => axios.post(baseURL, body).then(tripCallback).catch(errCallback)
const deleteTrip = id => axios.delete(`${baseURL}/${id}`).then(tripCallback).catch(errCallback)
// const updateTrip = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(tripCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let tripName = document.querySelector('#tripName')
    let location = document.querySelector('#location')
    let hotel = document.querySelector('#hotel')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        tripName: tripName.value,
        location: location.value, 
        hotel: hotel.value,
        imageURL: imageURL.value
    }

    createTrip(bodyObj)

    tripName.value = ''
    location.value = ''
    hotel.value = ''
    imageURL.value = ''
}

function createTripCard(trip) {
    const tripCard = document.createElement('div')
    tripCard.classList.add('trip-card')

    tripCard.innerHTML = `<img alt='trip image cover' src=${trip.imageURL} class="trip-cover-image"/>
    <p class="tripName">${trip.tripName}</p>
    <p class="location">${trip.location}</p>
    <p class="hotel">${trip.hotel}</p>
    <div class="btns-container">
        <button id="edit-${trip.id}" onclick="openEditForm(event)">edit</button>
    </div>
    <button onclick="deleteTrip(${trip.id})">delete</button>
    `


   tripContainer.appendChild(tripCard)
}

function openEditForm(event){
    const elementId = event.target.id
    const id = elementId.split("-")[1]
    // alert(id)
    editForm.classList.remove('hidden')
}

function displaytrip(arr) {
    tripContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTripCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllTrip()