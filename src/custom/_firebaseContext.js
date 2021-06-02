//Create our firebase context here
import React, { createContext } from 'react'
import * as firebase from 'firebase'


const FirebaseContext = React.createContext(null)

const config = {
	apiKey: 'AIzaSyAZ5YWzDlh0mFck4DarSAe35YGXLlBXtow',
	authDomain: 'arcane404-netflix-clone.firebaseapp.com',
	databaseURL: 'arcane404-netflix-clone.firebaseio.com',
	projectId: 'arcane404-netflix-clone',
	storageBucket: 'arcane404-netflix-clone.appspot.com',
	messagingSenderId: '793275128541',
	appId: '1:321602914795:web:aa124ab9c7f565514db1ae'
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
