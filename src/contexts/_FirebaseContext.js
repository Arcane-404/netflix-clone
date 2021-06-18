import React, { useState, createContext, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_APP_ID } = process.env

const FirebaseContexts = createContext(null)

const config = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: 'project-1-ea220.firebaseapp.com',
	databaseURL: 'https://project-1-ea220.firebaseio.com',
	projectId: 'project-1-ea220',
	storageBucket: 'project-1-ea220.appspot.com',
	messagingSenderId: '22912965609',
	appId: REACT_APP_FIREBASE_APP_ID
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
