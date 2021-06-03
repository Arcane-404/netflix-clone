//Create our firebase context here
import React, { createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import dotenv from 'dotenv'

dotenv.config()

const { REACT_APP_API_KEY, REACT_APP_APP_ID } = process.env

console.log(process.env.REACT_APP_API_KEY)

console.log(REACT_APP_API_KEY, REACT_APP_APP_ID)

const FirebaseContext = createContext(null)

const config = {
	apiKey: REACT_APP_API_KEY,
	authDomain: 'arcane404-netflix-clone.firebaseapp.com',
	databaseURL: 'arcane404-netflix-clone.firebaseio.com',
	projectId: 'arcane404-netflix-clone',
	storageBucket: 'arcane404-netflix-clone.appspot.com',
	messagingSenderId: '793275128541',
	appId: REACT_APP_APP_ID
}

const fb = firebase.default.initializeApp(config)

const FirebaseContextProvider = ({ children }) => {
	return (
		<FirebaseContext.Provider value={{ firebase: fb }}>
			{ children }
		</FirebaseContext.Provider>
	)
}

export { FirebaseContext, FirebaseContextProvider }
