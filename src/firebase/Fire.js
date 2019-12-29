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
	constructor(language) {
    app.initializeApp(fireConfig)

    this.language = 'pt'
		this.auth = app.auth()
    this.db = app.firestore()
  }

  //DYNAMIC DATA
  async getDynamicData() {
    const homeText = await this.getHomeText()
    const repertoire = await this.getRepertoire()
    const data = {
      homeText: homeText,
      repertoire: repertoire,
      currentLanguage: this.language
    }
    return data
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

  //STATIC DATA
  async getStaticData() {
    const staticData = await this.db
      .collection(this.language)
      .doc('static_values')
      .get()

    return staticData.data()
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


  async getHomeText() {
    const home_text = await this.db
      .collection(this.language)
      .doc('dynamic_values')
      .get()

    if (home_text.get('home_text'))
      return home_text.get('home_text')
    else
      return ''
  }

  async getRepertoire() {
    const data = {
      name: '',
      lyrics: '',
      imgUrl: '',
      spotifyUrl: ''
    }
    const snapshot = await this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .get()

    return snapshot.docs.map(doc => {

      const docData = doc.data().data

      return {
        id: doc.id,
        data:{
          ...data,
          ...docData
        }
      }
    })
  }

  addTrack = async (track) => {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .add(track)
  }

  removeTrack(trackId) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }
    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .doc(trackId)
      .delete()
  }

  editTrack(track) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .doc(track.id)
      .update(track)
  }

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
  }







  addMember(member) {
    if(!this.auth.currentUser) {
			return alert('Not authorized')
    }

    return this.db
      .collection(this.language)
      .doc('dynamic_values')
      .collection('repertoire')
      .add(member)
  }
}

export default new Fire()
