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
apiKey: "AIzaSyBwuD6u960Ejl63O_nPlre4zviMRSve_p4",
authDomain: "codeyourown-347217.firebaseapp.com",
projectId: "codeyourown-347217",
storageBucket: "codeyourown-347217.appspot.com",
messagingSenderId: "982106897044",
appId: "1:982106897044:web:133d2316b9ce6518df5281",
measurementId: "G-0PE9NMY8PE"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const btn = document.querySelector('#btn')
const forms = document.querySelector('#form')
const linkArray = {}
btn.addEventListener('click', () => {
  let confirmInfo = confirm(
    'Are you sure about the above provided information?, after clicking OK you cannot come back to this page to edit information',
  )
  if (confirmInfo) {
    createLinkArray()
  }
})
function createLinkArray() {
  for (let i = 0; i < forms.length; i++) {
    //creating an array of links provied and storing it into local storage
    if (forms[i].value) {
      linkArray[forms[i].id] = forms[i].value
    }
  }
  localStorage.setItem('links', JSON.stringify(linkArray))
  console.log(linkArray)
  sendDataToFirebase();
  //   localStorage.setItem('uniqueID', identifier)
  //   const qridentifier = identifier
  //   fetch(
  //     `https://api.qrserver.com/v1/create-qr-code/?data=https://ishar19.github.io/Code-your-own/fetch.html?id=${identifier}`,
  //   )
  //     .then(function (response) {
  //       const data = response.url
  //       localStorage.setItem('url', data)
  //       console.log(data)
  //     })
  //     .then(function (response) {
  //       window.location.replace('./show.html')
  //     })
}
async function sendDataToFirebase(){
const userlinks = JSON.parse(localStorage.getItem('links'))
const image = document.querySelector('#qr')
const form = document.forms[0]
const docRef = await addDoc(collection(db, "links"), {
    links: userlinks,
//   Name: userlinks.Name,
//   Destination: QRurl,
//   Website: userlinks.Website,
//   Gmail: userlinks.Gmail,
//   Contact: userlinks.Contact,
//   Twitter: userlinks.Twitter,
//   Github: userlinks.Github,
//   LinkedIn: userlinks.LinkedIn,
//   Instagram: userlinks.Instagram,
//   Discord: userlinks.Discord,
//   Kaggle: userlinks.Kaggle,
//   Spotify: userlinks.Spotify,
//   Pinterest: userlinks.Pinterest,
//   Youtube: userlinks.Youtube,
//   Yahoo: userlinks.Yahoo,
//   Snapchat: userlinks.Snapchat,
//   Dribbble: userlinks.Dribbble,
//   Behance: userlinks.Behance,
//   Devfolio: userlinks.Devfolio,
//   Codeforces: userlinks.Codeforces,
//   Codechef: userlinks.Codechef,
//   Leetcode: userlinks.Leetcode,
//   Gitlab: userlinks.Gitlab,
//   Bitbucket: userlinks.Bitbucket,
//   Twitch: userlinks.Twitch,
//   Slack: userlinks.Slack,
//   Medium: userlinks.Medium,
});
console.log(docRef.id)
const uuid = docRef.id;
localStorage.setItem('identifier',uuid)
window.location.replace('./show.html')
}
