import app from 'firebase/app'
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
	constructor() {
		app.initializeApp(fireConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
  }

  async getAdminData() {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    const mainText = await this.getMainText()
    const repertoire = await this.getRepertoire()
    const data = {
      mainText: mainText,
      repertoire: repertoire
    }
    return data
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

    return this.db.doc(`admin_values/main`).set({
			text
		})
  }

  async getMainText() {
    const text = await this.db.doc('admin_values/main').get()

    return text.get('text')
  }

  async getRepertoire() {
    const snapshot = await this.db.collection('repertoire').get()

    return snapshot.docs.map(doc => {
      return {
        id: doc.id,
        data: doc.data().data
      }
    })
  }


  addTrack(track) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db.collection(`repertoire`).add(track)

  }

  editTrack(track) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db.doc(`repertoire/${track.id}`).update(track.data)
  }



	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Fire()