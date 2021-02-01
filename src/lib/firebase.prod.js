import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDozA4nf-D1feicQ-Wxmty-UpWRsyQDIpw",
  authDomain: "netflix-clone-8ac9d.firebaseapp.com",
  projectId: "netflix-clone-8ac9d",
  storageBucket: "netflix-clone-8ac9d.appspot.com",
  messagingSenderId: "347205814729",
  appId: "1:347205814729:web:88428b2e02459edb254018"
}

const firebase = Firebase.initializeApp(config)

export { firebase }
