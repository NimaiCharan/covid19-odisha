const functions = require('firebase-functions');
var firebase = require("firebase");
var admin = require("firebase-admin");

var serviceAccount = require("./fire.json");

firebase.initializeApp({
    serviceAccount,
    databaseURL: "https://covid19-odisha.firebaseio.com/" 
});

var db = firebase.database();
var ref = db.ref("numbers"); 
ref.once("value", function(snapshot) {
    var data = snapshot.val();   //Data is in JSON format.
    console.log(data);
  });


