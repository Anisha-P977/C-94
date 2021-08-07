
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyD7tiZ2XJ8tI3vgwvjsDKQeFrcbx7FVGCM",
      authDomain: "twitter---kwitter.firebaseapp.com",
      databaseURL: "https://twitter---kwitter-default-rtdb.firebaseio.com",
      projectId: "twitter---kwitter",
      storageBucket: "twitter---kwitter.appspot.com",
      messagingSenderId: "550776731123",
      appId: "1:550776731123:web:672cead9fde8bf12e5ce86",
      measurementId: "G-EW5SNZKS86"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
