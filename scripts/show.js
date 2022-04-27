// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js'
import {
  doc,
  getFirestore,
  collection,
  addDoc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js'
const firebaseConfig = {
  apiKey: 'AIzaSyBwuD6u960Ejl63O_nPlre4zviMRSve_p4',
  authDomain: 'codeyourown-347217.firebaseapp.com',
  projectId: 'codeyourown-347217',
  storageBucket: 'codeyourown-347217.appspot.com',
  messagingSenderId: '982106897044',
  appId: '1:982106897044:web:133d2316b9ce6518df5281',
  measurementId: 'G-0PE9NMY8PE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore()
const userlinks = JSON.parse(localStorage.getItem('links'))
const image = document.querySelector('#qr')
const form = document.forms[0]
const id = localStorage.getItem('identifier')
console.log(id)
const getDocRef = doc(db, 'links', id)
const docSnap = await getDoc(getDocRef)
if (docSnap.exists()) {
  const response = docSnap.data().links
  if (response['Name']) {
    document.querySelector('.name').innerText = response['Name']
  }
  for (let i = 0; i < form.length; i++) {
    console.log(response[form[i].id])
    let formID = form[i].id
    document.getElementById(`${formID}`).style.display = 'none'
    if (response[form[i].id]) {
      document.getElementById(`${formID}`).value = response[form[i].id]
      document.getElementById(`${formID}`).style.display = 'block'
    }
    document.getElementById(`${formID}`).value = response[form[i].id]
  }
} else {
  console.log('No such document!')
}


fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=http://ishar19.github.io/code-your-own/fetch.html?id=${id}`,
    )
      .then(function (response) {
        const QRurl = response.url
        localStorage.setItem('url', QRurl)
        console.log(data)
      })
      .catch(function (err) {
          console.log(err)
      })



const imageURL= localStorage.getItem('url')

image.src = imageURL
var newurl = imageURL.split('data=')
console.log(newurl)
// document.getElementsByClassName('linkref')[0].innerText = newurl[1]
document.getElementsByClassName('linkref')[0].href = newurl[1]
document.getElementsByClassName('QRref')[0].href = imageURL
console.log(`${newurl[1]}`)

//adding url shortener
const encodedParams = new URLSearchParams()
encodedParams.append('url', `${newurl[1]}`)

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
    'X-RapidAPI-Key': '84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26',
  },
  body: encodedParams,
}

fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    const removed = JSON.stringify(response['result_url']).replaceAll('"', '')
    console.log(removed) // 👉️ hello world

    document.getElementsByClassName('linkref')[0].innerText = removed
    document.getElementsByClassName('linkref')[0].href = removed
  })
  .catch((err) => console.error(err))

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById('myURL')
  console.log(copyText.innerText)
  /* Select the text field */
  /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerText)

  /* Alert the copied text */
  alert('Copied the text: ' + copyText.innerText)
}
