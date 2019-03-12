import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBk1jiaX_EQAi4vBF9MNwt6N6AjJcYxiJI",
  authDomain: "my-pokemon-team-builder.firebaseapp.com",
  databaseURL: "https://my-pokemon-team-builder.firebaseio.com",
  projectId: "my-pokemon-team-builder",
  storageBucket: "my-pokemon-team-builder.appspot.com",
  messagingSenderId: "1064577356667"
})

const base = Rebase.createClass(firebaseApp.database())

export default base