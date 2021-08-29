import firebase from "firebase/compat"

const firebaseConfig = {
  apiKey: "AIzaSyDcNe98aNWhIAbr_sjEOgIlZlbLUPqm_Kg",
  authDomain: "reactjs-course-de66d.firebaseapp.com",
  databaseURL:
    "https://reactjs-course-de66d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactjs-course-de66d",
  storageBucket: "reactjs-course-de66d.appspot.com",
  messagingSenderId: "444586033544",
  appId: "1:444586033544:web:33a8f138834633059cba3d",
  measurementId: "G-1EZR1ELVNG",
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.database()
