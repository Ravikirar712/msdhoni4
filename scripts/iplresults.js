// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = { apiKey: "AIzaSyAWh_epOHcjM-H4mAnlmYXn_QBzr7dbm1U",
authDomain: "ms-dhoni-39c76.firebaseapp.com",
databaseURL: "https://ms-dhoni-39c76-default-rtdb.firebaseio.com",
projectId: "ms-dhoni-39c76",
storageBucket: "ms-dhoni-39c76.appspot.com",
messagingSenderId: "556242799671",
appId: "1:556242799671:web:1ebfeeb33857b9270b03b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('datavalue').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var year =getInputVal('year');
    readResults(year);
}
    function getInputVal(id){
    return document.getElementById(id).value;
}
function readResults(year){
    
  var results=firebase.database().ref(year);
  results.on('value', (data) => {
   var ranks = data.val(); 
   var finalranks=ranks.toString().split(',');
   document.getElementById("result1").innerHTML ="<br > 1. " +finalranks[1];
   document.getElementById("result2").innerHTML ="<br > 2. " +finalranks[2];
   document.getElementById("result3").innerHTML ="<br > 3. " +finalranks[3];
   document.getElementById("result4").innerHTML ="<br > 4. " +finalranks[4];
   document.getElementById("result5").innerHTML ="<br > 5. " +finalranks[5];
   document.getElementById("result6").innerHTML ="<br > 6. " +finalranks[6];
   document.getElementById("result7").innerHTML ="<br > 7. " +finalranks[7];
   document.getElementById("result8").innerHTML ="<br > 8. " +finalranks[8];

  
})
}