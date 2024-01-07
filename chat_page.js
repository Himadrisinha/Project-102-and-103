//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyC-b_0m57PjeRgfMm01Klg2t3PRbf5i1a4",
    authDomain: "kwitter-10af2.firebaseapp.com",
    projectId: "kwitter-10af2",
    storageBucket: "kwitter-10af2.appspot.com",
    messagingSenderId: "240259011022",
    appId: "1:240259011022:web:4f94e9ade88f17ee371b9f",
    measurementId: "G-PJT9Z5L72V"
};

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push
 ({ 
    name:user_name,
    message:msg,
    like:0
 });

 document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start code

//End code
} });  }); }
getData();
