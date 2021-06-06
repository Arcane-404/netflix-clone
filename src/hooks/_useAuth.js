import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../contexts'
const { FirebaseContexts } = FirebaseContext

const useAuth = () => {

	const [ user, setUser ] = useState(null)
	const { firebase } = useContext( FirebaseContexts )
	const history = useHistory()

	useEffect( () => {
		firebase.auth().onAuthStateChanged( function ( authUser ) {
			if ( authUser ) {
				// User is signed in.
				console.log('User is signed in')
				history.push('/browse')
			} else {
				// No user is signed in.
				console.log('User is signed out')
			}
		})

	}, [ firebase, history ])
	return { user }
}

export default useAuth
