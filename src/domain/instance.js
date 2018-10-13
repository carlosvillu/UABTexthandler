import UABTextHandler from './index'

import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import RefsManager from './RefsManager'

const configPRO = {
  apiKey: 'AIzaSyByz8cBCO7KFN8b0mSPyAZ1rKn0xGCXHF8',
  authDomain: 'uab-texthandler.firebaseapp.com',
  databaseURL: 'https://uab-texthandler.firebaseio.com',
  projectId: 'uab-texthandler',
  storageBucket: 'uab-texthandler.appspot.com',
  messagingSenderId: '756066834728'
}
const configDEV = {
  apiKey: 'AIzaSyCsbo6-ShV7lS-9zllrb22NvD_b8NFHXHg',
  authDomain: 'uab-text-handler-dev.firebaseapp.com',
  databaseURL: 'https://uab-text-handler-dev.firebaseio.com',
  projectId: 'uab-text-handler-dev',
  storageBucket: 'uab-text-handler-dev.appspot.com',
  messagingSenderId: '92467887561'
}
firebase.initializeApp(
  process.env.STAGE === 'production' ? configPRO : configDEV
)

const domain = new UABTextHandler()
domain.config('firebase', firebase)
domain.config('refsManager', new RefsManager({firebase}))

export const fb = firebase
export default domain
