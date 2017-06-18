
window.alert("hello world!")
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCCo-frzCCfJRHw11FfZ3h3IaDGKwGfFaY",
    authDomain: "buddyproject-cb549.firebaseapp.com",
    databaseURL: "https://buddyproject-cb549.firebaseio.com",
    projectId: "buddyproject-cb549",
    storageBucket: "",
    messagingSenderId: "918922139301"
};
firebase.initializeApp(config);



var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var btnLogin = document.getElementById("btnLogin");
var btnSignUp = document.getElementById("btnSignUp");
var btnLogOut = document.getElementById("btnLogOut");

btnLogin.addEventListener("click", e => {
  //Get email and password
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  //Sign in
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener("click", e=> {
  //Get email and password
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  //Sign up
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));
})

btnLogOut.addEventListener('click', e=> {
  firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogOut.classList.remove('hide');
  }
  else {
    {
      console.log("not logged in");
      btnLogOut.classList.add('hide');
    }
  }
})
