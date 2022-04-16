const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

const sdk = new Appwrite();
sdk
    .setEndpoint('https://backend.codeyourown.tech/v1') // Your Appwrite Endpoint
    .setProject('codeyourown') // Your project ID
;
let readData = sdk.database.getDocument('all-data', id );

readData.then(function (response) {
    console.log(response); // Success
    if(response['Name']){
      document.querySelector('.name').innerText=response['Name'];
    }
    for (let i = 0; i < form.length;i++){
          console.log(response[form[i].id])
          let formID=form[i].id
          if(response[form[i].id]){
              document.getElementById(`${formID}`).style.display="block"
          }
          document.getElementById(`${formID}`).value=response[form[i].id]
    }
}, function (error) {
    console.log(error); // Failure
});
