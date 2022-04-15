// Init your Web SDK
const identifier = localStorage.getItem('uniqueID')
const userlinks=JSON.parse(localStorage.getItem('links'))
const QRurl = localStorage.getItem('url')
const image = document.querySelector('#qr')
const sdk = new Appwrite();
console.log(QRurl)
sdk
    .setEndpoint('http://143.244.183.200/v1') // Your Appwrite Endpoint
    .setProject('codeyourown') // Your project ID
;
let anyon= sdk.account.createAnonymousSession();

anyon.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});


let promise = sdk.database.createDocument('all-data', identifier ,{"Name":userlinks.Name,"Destination":QRurl});
promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

// let readData = sdk.database.getDocument('all-data', "e78e6201-e8a7-41ac-a81a-be8ecd39b9f3" );

// readData.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

image.src = QRurl
// const uniqueID = JSON.parse(identifier )
// console.log(typeof(identifier ))
// console.log(userlinks,identifier )
