import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCmC7Db6RYYO9WNm2laAqVJcn6U-G9MFLc",
  authDomain: "elsolucionario-6c2b9.firebaseapp.com",
  databaseURL: "https://elsolucionario-6c2b9.firebaseio.com",
  storageBucket: "elsolucionario-6c2b9.appspot.com",
  messagingSenderId: "280386060132"
}

firebase.initializeApp(config);

const database = firebase.database().ref().child('solutionManuals');

export default database;