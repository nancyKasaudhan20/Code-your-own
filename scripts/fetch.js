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
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);
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


// const sdk = new Appwrite();
// sdk
//     .setEndpoint('https://backend.codeyourown.tech/v1') // Your Appwrite Endpoint
//     .setProject('codeyourown') // Your project ID
// ;
// let readData = sdk.database.getDocument('all-data', id );

// readData.then(function (response) {
//     console.log(response); // Success
//     if(response['Name']){
//       document.querySelector('.name').innerText=response['Name'];
//     }
//     for (let i = 0; i < form.length;i++){
//           console.log(response[form[i].id])
//           let formID=form[i].id
//            document.getElementById(`${formID}`).style.display="none"
//            if(response[form[i].id]){
//              document.getElementById(`${formID}`).value=response[form[i].id]
//              document.getElementById(`${formID}`).style.display="block"
// }
//           document.getElementById(`${formID}`).value=response[form[i].id]
//     }
// }, function (error) {
//     console.log(error); // Failure
// });

