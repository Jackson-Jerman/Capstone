const tripContainer = document.getElementById("note-container")
const form1 = document.querySelector('form')

const baseURL1 = `/api/trip/note`

const tripNoteCallback = ({ data: trip }) => displaytripNotes(trip)
const errCallback = err => console.log(err)

const getAllTripNote = () => axios.get(baseURL).then(tripCallback).catch(errCallback)
const createTripNote = body => axios.post(baseURL1, body).then(tripNoteCallback).catch(errCallback)
// const deleteTripNote = id => axios.delete(`${baseURL}/${id}`).then(tripNoteCallback).catch(errCallback)


function submitHandler1(e) {
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


   tripContainer1.appendChild(tripNoteCard)
}

function displaytripNotes(arr) {
    noteContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTripCard(arr[i])
    }
}

form1.addEventListener('submit', submitHandler1)

getAllTripNote()
