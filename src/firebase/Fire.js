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
  appId: process.env.REACT_APP_FIRE_APP_ID,
  measurementId: process.env.REACT_APP_FIRE_MEASUREMENT_ID,
};

class Fire {
	constructor() {
    app.initializeApp(fireConfig)

    this.language = ''
		this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }

  // Gallery
  addGalleryUrl = async (url) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
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

  // Repertoire
  addSong = async (data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
    
    try {
      const imageUploadTask = this.storage.ref(`gallery/${data.image.name}`).put(data.image, {contentType: data.image.type})
      const songUploadTask = this.storage.ref(`songs/${data.song.name}`).put(data.song, {contentType: data.song.type})

      let imageUrl = ""
      let songUrl = ""

      await imageUploadTask
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => imageUrl = url)

      await songUploadTask
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => songUrl = url)

      return await this.db
        .collection('songs')
        .add({
          name: data.name,
          imageUrl: imageUrl,
          spotifyUrl: data.spotifyUrl,
          songUrl: songUrl,
        })
    } catch (e) {
      throw e
    }
  }

  getSongs = async () => {
    const snapshot = await this.db
      .collection('songs')
      .get()

    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))
  }

  deleteSong = async (id) => {
    const snapshot = await this.db
      .collection('songs')
      .doc(id)
      .delete()
  }

  getMembers = async () => {
    const snapshot = await this.db
      .collection('members')
      .get()
    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
  }

  getLinks = async () => {
    const snapshot = await this.db
      .collection('links')
      .get()  

    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
  }

  // Lyrics
  updateSong = async (data) => {
    try {
      return await this.db
        .collection('songs')
        .doc(data.id)
        .update(data)
    } catch (e) {
      throw e
    }
  }
  // Lyrics
  addHomeText = async (text) => {
    try {
      return await this.db
        .collection('texts')
        .add({
          _id: 'homeText',
          [this.language]: text
        })
    } catch (e) {
      throw e
    }
  }

  updateHomeText = async (data) => {
    try {
      return await this.db
        .collection('texts')
        .doc(data.id)
        .update(data)
    } catch (e) {
      throw e
    }
  }

  getHomeText = async () => {
    const snapshot = await this.db
      .collection('texts')
      .where('_id','==','homeText')
      .limit(1)
      .get()

    const data = snapshot.docs[0].data();
    const id = snapshot.docs[0].id;
    
    return {
      id,
      ...data
    }
  }

  addMember = async (data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
    
    try {
      const imageUploadTask = this.storage.ref(`members/${data.image.name}`).put(data.image, {contentType: data.image.type})

      let imageUrl = ""

      await imageUploadTask
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => imageUrl = url)

      return await this.db
        .collection('members')
        .add({
          name: data.name,
          imageUrl: imageUrl,
          text: data.text,
          active: data.active,
        })
    } catch (e) {
      throw e
    }
  }

  updateMember = async (data) => {
    debugger
    try {
      return await this.db
        .collection('members')
        .doc(data.id)
        .update(data)
    } catch (e) {
      throw e
    }
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
