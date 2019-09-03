import { firebaseConfig } from './fireConfig'
import firebase from 'firebase'

const db = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const app = firebase.app();
  return app.database().ref()
}

export default db
