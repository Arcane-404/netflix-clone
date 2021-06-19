import React, { useState, createContext, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const {
	REACT_APP_FIREBASE_API_KEY: apiKey,
	REACT_APP_FIREBASE_AUTH_DOMAIN: authDomain,
	REACT_APP_FIREBASE_PROJECT_ID: projectId,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
	REACT_APP_FIREBASE_APP_ID: appId
} = process.env
const databaseURL = `https://${ projectId }.firebaseio.com`
const storageBucket = `${ projectId }.appspot.com`

const FirebaseContexts = createContext(null)

const config = {
	apiKey,
	authDomain,
	databaseURL,
	projectId,
	storageBucket,
	messagingSenderId,
	appId
}

const fb = firebase.default.initializeApp(config)

const FirebaseConsumer = () => useContext(FirebaseContexts)

const FirebaseContextProvider = ({ children }) => {

	const [ loggedIn, setLoggedIn ] = useState('')
	const value = { firebase: fb, loggedIn, setLoggedIn }

	return (
		<FirebaseContexts.Provider value={ value }>
			{ children }
		</FirebaseContexts.Provider>
	)
}

export { FirebaseContexts, FirebaseContextProvider, FirebaseConsumer }
