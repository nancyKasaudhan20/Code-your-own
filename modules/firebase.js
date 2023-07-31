  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwuD6u960Ejl63O_nPlre4zviMRSve_p4",
    authDomain: "codeyourown-347217.firebaseapp.com",
    projectId: "codeyourown-347217",
    storageBucket: "codeyourown-347217.appspot.com",
    messagingSenderId: "982106897044",
    appId: "1:982106897044:web:133d2316b9ce6518df5281",
    measurementId: "G-0PE9NMY8PE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
