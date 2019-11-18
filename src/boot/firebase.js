import * as firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

// Agregar configuración firebase:
var firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  databaseURL: 'xxx',
  projectId: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
  appId: 'xxx'
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore()

export { firebaseAuth, db }
