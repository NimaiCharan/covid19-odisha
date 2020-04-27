const functions = require('firebase-functions');
const cors = require('cors')({origin: true});


var data={MadeBy: "Nimai"};
    var firebase = require("firebase");
    var admin = require("firebase-admin");

    var serviceAccount = require("./fire.json");

    firebase.initializeApp({
        serviceAccount,
        databaseURL: "https://covid19-odisha.firebaseio.com/" 
    });

    var db = firebase.database();


exports.getNumbers = functions.https.onRequest((request, response) => {

    var ref = db.ref("numbers"); 
    cors(request, response, () => {});
    ref.once("value", function(snapshot) {
        data = snapshot.val();   //Data is in JSON format.

        response.send(data);
      });
      //response.send(data);
 });

 exports.getRaw = functions.https.onRequest((request, response) => {

    var ref = db.ref("raw"); 
    cors(request, response, () => {});
    ref.once("value", function(snapshot) {
        data = snapshot.val();   //Data is in JSON format.

        response.send(data);
      });
      //response.send(data);
 });
 exports.getDist = functions.https.onRequest((request, response) => {

    var ref = db.ref("dist"); 
    cors(request, response, () => {});
    ref.once("value", function(snapshot) {
        data = snapshot.val();   //Data is in JSON format.

        response.send(data);
      });
      //response.send(data);
 });

 exports.getAge = functions.https.onRequest((request, response) => {

    var ref = db.ref("age group"); 
    cors(request, response, () => {});
    ref.once("value", function(snapshot) {
        data = snapshot.val();   //Data is in JSON format.
        response.send(data);
      });
      //response.send(data);
 });
 exports.getGender = functions.https.onRequest((request, response) => {

    var ref = db.ref("gender"); 
    cors(request, response, () => {});
    ref.once("value", function(snapshot) {
        data = snapshot.val();   //Data is in JSON format.
        response.send(data);
      });
      //response.send(data);
 });
 exports.getSummary = functions.https.onRequest((request, response) => {

    var ref = db.ref("summary"); 
    cors(request, response, () => {});
    ref.once("value", function(snapshot) {
        data = snapshot.val();   //Data is in JSON format.
        response.send(data);
      });
      //response.send(data);
 });

