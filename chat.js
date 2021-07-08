var firebaseConfig = {
    apiKey: "AIzaSyCKePV0LHCYXcYFpNG-EerDzbbVtDpWcQA",
    authDomain: "chat-app-9f4e5.firebaseapp.com",
    projectId: "chat-app-9f4e5",
    storageBucket: "chat-app-9f4e5.appspot.com",
    messagingSenderId: "67291934033",
    appId: "1:67291934033:web:8ab34d0d4b431c1d2db770"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function log_out(){
    localStorage.removeItem("username");
    window.location = "index.html"
}

function add_room(){
    
  window.location = "chat_page.html"

  roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
  }


  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name:" + Room_names);
      row = "<div class='room_name' id=" + Room_names+ " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div> <hr>"; 
      document.getElementById("output").innerHTML = row;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  