const btn = document.querySelector('#btn')
const forms = document.querySelector('#form')
const linkArray = {}
function btnClick() {
  let confirmInfo = confirm(
    'Are you sure about the above provided information?, after clicking OK you cannot come back to this page to edit information',
  )
  if (confirmInfo) {
    createLinkArray()
  }
}
function createLinkArray() {
    const identifier = self.crypto.randomUUID()
// localStorage.clear()
console.log(identifier)
  for (let i = 0; i < forms.length; i++) {
    if (forms[i].value) {
      linkArray[forms[i].id] = forms[i].value
    }
  }
  localStorage.setItem('links', JSON.stringify(linkArray))
  console.log(linkArray)
  localStorage.setItem('uniqueID', identifier)
  // const qridentifier = identifier
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:5500/fetch.html?id=${identifier}`,
  ).then(function (response) {
    const data = response.url
    localStorage.setItem('url', data)
    console.log(data)
  }).then(function (response) {
        window.location.replace("./show.html")

  })
}




