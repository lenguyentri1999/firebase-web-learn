var username = document.getElementById('username');
var password = document.getElementById('password');
var submitBtn = document.getElementById('submitBtn');
var firebaseRef = firebase.database().ref();


function writeUserData() {
  var name = username.value;
  var pass = password.value;
  firebaseRef.child(name).set(pass);
  window.alert("OK");
}
