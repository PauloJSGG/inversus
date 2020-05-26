import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'

const fireConfig = {
  apiKey: process.env.REACT_APP_FIRE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRE_APP_ID
};

class Fire {
	constructor() {
    app.initializeApp(fireConfig)

    this.language = ''
		this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }

  addGalleryImages = async (url) => {
    debugger
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
    debugger
    return await this.db
      .collection('galleries')
      .add(url)
  }

  getGalleryImages = async () => {
    const snapshot = await this.db
      .collection('galleries')
      .get()

    return snapshot.docs.map(item => ({
      ...item.data()
    }))
  }





  //UPLOAD IMAGES
  // uploadImage = async (image) => {
  //   const uploadTask = await this.fire.storage.ref(`images/${image.name}`).put(image)
  //   await uploadTask.on('state_changed', snapshot => console.log('progress'),
  //                                        error => alert(error),
  //                                        () => {
  //                                         this.fire.storage.ref('images').child(image.name).getDownloadURL().then(url => imgUrl = url)
  //                                        })
  //   }

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
      .doc(this.language.concat(`/${path}/${data.id}`))
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
    const gallery = await this.getGalleryImages('gallery')
    const homeText = texts ? texts.homeText : ''
    const data = {
      homeText,
      repertoire: repertoire,
      members: members,
      currentLanguage: this.language,
      gallery: gallery
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
    console.log('wtf',language)
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

export default new Fire();
