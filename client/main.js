const tripContainer = document.getElementById("note-container")
const form = document.querySelector('form')

const baseURL = `/api/trip/note`

const tripNoteCallback = ({ data: trip }) => displaytripNotes(trip)
const errCallback = err => console.log(err)


const createTripNote = body => axios.post(baseURL, body).then(tripNoteCallback).catch(errCallback)
// const deleteTripNote = id => axios.delete(`${baseURL}/${id}`).then(tripNoteCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let startDate = document.querySelector('#startDate')
    let endDate = document.querySelector('#endDate')
    let place = document.querySelector('#place')
    let other = document.querySelector('#other')
    

    let bodyObj = {
        startDate: startDate.value,
        endDate: endDate.value,
        place: place.value, 
        other: other.value
       
    }

    createTripNote(bodyObj)

    startDate.value = ''
    endDate.value = ''
    place.value = ''
    other.value = ''
   
}

function createTripNoteCard(tripNote) {
    const tripNoteCard = document.createElement('div')
    tripNoteCard.classList.add('note-card')

    tripNoteCard.innerHTML = `
    <p class="startDate">${tripNote.startDate}</p>
    <p class="endDate">${tripNote.endDate}</p>
    <p class="place">${tripNote.place}</p>
    <p class="other">${tripNote.other}</p>
    <button onclick="deleteTripNote(${tripNote.id})">delete</button>
    `


   tripContainer.appendChild(tripNoteCard)
}

function displaytripNotes(arr) {
    tripContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTripCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)


