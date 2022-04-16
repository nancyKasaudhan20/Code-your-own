// Init your Web SDK
const identifier = localStorage.getItem('uniqueID')
const userlinks = JSON.parse(localStorage.getItem('links'))
const QRurl = localStorage.getItem('url')
const fetchURL = localStorage.getItem('')
const image = document.querySelector('#qr')
const form = document.forms[0]
const sdk = new Appwrite()
console.log(QRurl)
sdk
  .setEndpoint('http://143.244.183.200/v1') // Your Appwrite Endpoint
  .setProject('codeyourown') // Your project ID
let anyon = sdk.account.createAnonymousSession()

anyon.then(
  function (response) {
    console.log(response) // Success
  },
  function (error) {
    console.log(error) // Failure
  },
)

let promise = sdk.database.createDocument('all-data', identifier, {
  "Name": userlinks.Name,
  "Destination": QRurl,
  "Website": userlinks.Website,
  "Gmail": userlinks.Gmail,
  "Contact": userlinks.Contact,
  "Twitter": userlinks.Twitter,
  "Github": userlinks.Github,
  "LinkedIn": userlinks.LinkedIn,
  "Instagram": userlinks.Instagram,
  "Discord": userlinks.Discord,
  "Kaggle": userlinks.Kaggle,
  "Spotify": userlinks.Spotify,
  "Pinterest": userlinks.Pinterest,
  "Youtube": userlinks.Youtube,
  "Yahoo": userlinks.Yahoo,
  "Snapchat": userlinks.Snapchat,
  "Dribbble": userlinks.Dribbble,
  "Behance": userlinks.Behance,
  "Devfolio": userlinks.Devfolio,
  "Codeforces": userlinks.Codeforces,
  "Codechef": userlinks.Codechef,
  "Leetcode": userlinks.Leetcode,
  "Gitlab": userlinks.Gitlab,
  "Bitbucket": userlinks.Bitbucket,
  "Twitch": userlinks.Twitch,
  "Slack": userlinks.Slack,
  "Medium": userlinks.Medium,
})
promise.then(
  function (response) {
    console.log(response) // Success
  },
  function (error) {
    console.log(error) // Failure
  },
).then(function (e) {
  let readData = sdk.database.getDocument('all-data', identifier );

readData.then(function (response) {
    console.log(response); // Success
    console.log(response['Name'])
    if(response['Name']){
      document.querySelector('.name').innerText=response['Name'];
    }
    for (let i = 0; i < form.length;i++){
          console.log(response[form[i].id])
          let formID=form[i].id
          document.getElementById(`${formID}`).value=response[form[i].id]
    }
}, function (error) {
    console.log(error); // Failure
});
})

image.src = QRurl
var newurl =QRurl.split("data=")
console.log(newurl)
document.getElementsByClassName('linkref')[0].innerText = newurl[1];
document.getElementsByClassName('linkref')[0].href = newurl[1];
document.getElementsByClassName('QRref')[0].href = QRurl;


function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("myURL");
  console.log(copyText.innerText);
  /* Select the text field */
   /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerText);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.innerText);
}


