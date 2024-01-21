
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
apiKey: "AIzaSyDHldn6ww4z9oUWoBuoaQ-GleVtZilaBE8",
authDomain: "authentication-part-c5810.firebaseapp.com",
projectId: "authentication-part-c5810",

appId: "1:596425625891:web:da2b2cdddf1083e00f3c96",
measurementId: "G-J4EXBX47YH"
};

const app = initializeApp(firebaseConfig);
const  database = getDatabase(app);
const auth = getAuth();

SignUp.addeventlistener ('click', (e) => {

    var  email = document.getElementById('email').value
    var  password = document.getElementById('password').value
    var  username = document.getElementById('Username').value
    var  fullname = document.getElementById('fullname').value
    createUserWithEmailAndPassword(auth, email, password,username,fullname)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('Usercreated!')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errormessage)
      // ..
    });

})


