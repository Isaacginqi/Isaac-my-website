// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyB7DFLvQcPjjpnWoQFE8MRGnasgVqKESV4",
    authDomain: "isaacgingqi-1f0c2.firebaseapp.com",
    databaseURL: "https://isaacgingqi-1f0c2.firebaseio.com",
    projectId: "isaacgingqi-1f0c2",
    storageBucket: "isaacgingqi-1f0c2.appspot.com",
    messagingSenderId: "436947212572",
    appId: "1:436947212572:web:441cb5397e10be661502d9",
    measurementId: "G-NBZ3K6SQ6J"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
