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

  //DOCUMENTS
  getDocument = async (path) => await this.db
    .doc(this.language.concat(`/${path}`))
    .get()
    .then(r => r.data())

  addOrEditDocument = async (path, data) => await this.db
    .doc(this.language.concat(`/${path}`))
    .set(data)

  updateDocument = async (path, data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return await this.db
      .doc(this.language.concat(`/${path}`))
      .update(data)
  }

  deleteDocument = async (path) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return await this.db
      .doc(this.language.concat(`/${path}`))
      .delete()
  }

  //COLLECTIONS
  getCollection = async (path) => {
    const snapshot = await this.db
      .collection(this.language.concat(`/${path}`))
      .get()

    return snapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))
  }

  addToCollection = async (path, data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return await this.db
      .collection(this.language.concat(`/${path}`))
      .add(data)
  }

  //DYNAMIC DATA
  async getDynamicData() {
    const repertoire = await this.getCollection('dynamic_values/repertoire')
    const texts = await this.getDocument('dynamic_values')
    const members = await this.getCollection('dynamic_values/members')
    const data = {
      texts: texts,
      repertoire: repertoire,
      members: members,
      currentLanguage: this.language
    }

    return data
  }

  //STATIC DATA
  getStaticData = async () => await this.getDocument('static_values')

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

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser
  }
}

export default new Fire()
