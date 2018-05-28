import UABTextHandler from './index'

import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import RefsManager from './RefsManager'

const config = {
  apiKey: 'AIzaSyByz8cBCO7KFN8b0mSPyAZ1rKn0xGCXHF8',
  authDomain: 'uab-texthandler.firebaseapp.com',
  databaseURL: 'https://uab-texthandler.firebaseio.com',
  projectId: 'uab-texthandler',
  storageBucket: 'uab-texthandler.appspot.com',
  messagingSenderId: '756066834728'
}
firebase.initializeApp(config)

const domain = new UABTextHandler()
domain.config('firebase', firebase)
domain.config('refsManager', new RefsManager({firebase}))

export const fb = firebase
export default domain
