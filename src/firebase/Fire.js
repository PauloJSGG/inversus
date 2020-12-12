import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'
const shortid = require('shortid');

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

  getGalleryImages = async () => {
    const snapshot = await this.db
      .collection('galleries')
      .get()

    return snapshot.docs.map(item => ({
      ...item.data()
    }))
  }

  addView = async () => {
    const snapshot = await this.db
      .collection('info')
      .where('_id', "==", 'views')
      .get()
    
    const data = {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data()
    } 
    await this.db
      .collection('info')
      .doc(data.id)
      .update({
        ...data,
        number: data.number + 1
      })
    
  }

  // Repertoire
  addSong = async (data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
    
    try {
      const imageUploadTask = this.storage.ref(`photos/${shortid.generate()}`).put(data.image, {contentType: data.image.type})
      const songUploadTask = this.storage.ref(`songs/${shortid.generate()}`).put(data.song, {contentType: data.song.type})

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
          visibility: data.visibility
        })
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
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
    try{
      return await this.db
        .collection('songs')
        .doc(id)
        .delete()  
        .then(alert('✅Success✅'))
    } catch (e){
      alert('❌Error❌')
      throw e
    }
    
  }

  deleteMember = async (id) => {
    try {
      return await this.db
        .collection('members')
        .doc(id)
        .delete() 
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
      throw e
    }
  }

  deleteGallery = async (id) => {
    const snapshot = await this.db
      .collection('galleries')
      .doc(id)
      .delete()
  }

  getMembers = async () => {
    const snapshot = await this.db
      .collection('members')
      .orderBy('active','desc')
      .get()
    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
  }

  getLinks = async () => {
    const snapshot = await this.db
      .collection('links')
      .where('_id', "==", 'nav')
      .get()  

    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
  }

  getGallery = async (category) => {
    const snapshot = await this.db
      .collection('galleries')
      .where('category', "==", category)
      .get()

    return snapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))
  }
  
  getGalleryCategories = async () => {
    const snapshot = await this.db
      .collection('links')
      .where('_id', "==", 'category')
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
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
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
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
      throw e
    }
  }

  AddOrUpdateHomeText = async (data) => {
    try {
      if(!data.id)
        return await this.db
          .collection('texts')
          .add({
            _id: 'homeText',
            ...data
          }) 

        return await this.db
          .collection('texts')
          .doc(data.id)
          .update(data)
          .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
      throw e
    }
  }

  getHomeText = async () => {
    const snapshot = await this.db
      .collection('texts')
      .where('_id','==','homeText')
      .limit(1)
      .get()

    if(!snapshot.docs[0])
      return {}

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
      const imageUploadTask = this.storage.ref(`members/${shortid.generate()}`).put(data.image, {contentType: data.image.type})

      let imageUrl = ""

      await imageUploadTask
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => imageUrl = url)

      return await this.db
        .collection('members')
        .add({
          name: data.name,
          imageUrl: imageUrl,
          active: data.active,
        })
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
      throw e
    }
  }

  updateMember = async (data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
    
    try {
      if(data.imageUpdate){
        const imageRef = this.storage.refFromURL(data.imageUrl);
        imageRef.delete()

        const imageUploadTask = this.storage.ref(`members/${shortid.generate()}`).put(data.imageUpdate, {contentType: data.imageUpdate.type})
        await imageUploadTask
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then(url => data.imageUrl = url)
      }

      const normalizedData = {
        name: data.name,
        imageUrl: data.imageUrl,
        active: data.active,
      }
      if(data[this.language] && data[this.language].text && data[this.language].text.length > 0) {
        normalizedData[this.language] = data[this.language]
      }

      return await this.db
        .collection('members')
        .doc(data.id)
        .set(normalizedData)
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
      throw e
    }
  }

  addOrUpdateMember = async (data) => {
    if(data.id)
      return await this.updateMember(data)
    else
      return await this.addMember(data)
  }

  addGallery = async (data) => {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }
      try {
      const imageUploadTask = this.storage.ref(`galleries/${shortid.generate()}`).put(data.image, {contentType: data.image.type})

      let imageUrl = ""

      await imageUploadTask
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => imageUrl = url)

      return await this.db
        .collection('galleries')
        .add({
          description: data.description,
          category: data.category,
          imageUrl: imageUrl
        })
        .then(alert('✅Success✅'))
    } catch (e) {
      alert('❌Error❌')
      throw e
    }
  }

  getGalleries = async () => {
    const snapshot = await this.db
      .collection('galleries')
      .get()
    return snapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  setLanguage = async (language) => {
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
