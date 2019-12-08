import 'firebase'
import app from 'firebase/app'
import { SetOptions } from 'firebase'
import 'firebase/auth'
import 'firebase/firebase-firestore'
// import fireConfig from './fireConfig'

const fireConfig = {
  apiKey: "AIzaSyAcHlKFPl_VDbeOHWNZDsVr20AfedkUg1I",
  authDomain: "inversus-af0a6.firebaseapp.com",
  databaseURL: "https://inversus-af0a6.firebaseio.com",
  projectId: "inversus-af0a6",
  storageBucket: "inversus-af0a6.appspot.com",
  messagingSenderId: "247795252791",
  appId: "1:247795252791:web:28826135cbf003cf"
};


class Fire {
	constructor(language) {
    app.initializeApp(fireConfig)

    this.language = 'pt'
		this.auth = app.auth()
    this.db = app.firestore()
  }

  //ADMIN DATA
  async getDynamicData() {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }

    const mainText = await this.getHomeText()
    const repertoire = await this.getRepertoire()
    const data = {
      mainText: mainText,
      repertoire: repertoire
    }
    return data
  }

  //MAIN DATA
  async getMainData() {
    // const mainText = await this.getMainText()
    // const repertoire = await this.getRepertoire()
    // const data = {
    //   mainText: mainText,
    //   repertoire: repertoire
    // }
    // return data
  }

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
  }

  setLanguage(language) {
    this.language = language
  }

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
  }

  addMainText(text) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .set({home_text: text})
  }

  async getHomeText() {
    const home_text = await this.db
      .collection(this.language)
      .doc('dynamic_values')
      .get()

    return home_text.get('home_text')
  }

  async getRepertoire() {
    const snapshot = await this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .get()

    return snapshot.docs.map(doc => {
      return {
        id: doc.id,
        data: doc.data().data
      }
    })
  }


  async addTrack(track) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .add(track)
  }

  editTrack(track) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection(track.id)
      .update(track.data)
  }

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Fire()
