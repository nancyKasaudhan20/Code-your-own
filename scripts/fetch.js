const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);
const sdk = new Appwrite();
sdk
    .setEndpoint('http://143.244.183.200/v1') // Your Appwrite Endpoint
    .setProject('codeyourown') // Your project ID
;
let readData = sdk.database.getDocument('all-data', id );

readData.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
