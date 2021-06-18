import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../contexts'
const { FirebaseContexts } = FirebaseContext

const useAuth = () => {

	const history = useHistory()
	const { firebase, setLoggedIn } = useContext( FirebaseContexts )
	const [ user ] = useState(null)

	useEffect( () => {
		firebase.auth().onAuthStateChanged(( authUser ) => {
			if ( authUser ) {
				// User is signed in.
				// history.push('/browse')
				setLoggedIn(true)
			} else {
				// No user is signed in.
				setLoggedIn(false)
			}
		})

	}, [ firebase, history, setLoggedIn ])

	return { user }
}

export default useAuth
