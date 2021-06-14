import React from 'react'
// import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../../components'
import { FirebaseConsumer } from '../../contexts/consumers'
// import { FirebaseContext } from '../../contexts'
// const { FirebaseContexts } = FirebaseContext

const UserContainer = () => {

	const history = useHistory()
	const { firebase } = FirebaseConsumer()
	// const { firebase } = useContext(FirebaseContexts)

	const logoutUser = () => {
		firebase.auth().signOut()
		history.push('/logout')
	}

	return (
		<User>
			<User.Menu>User <User.CaretDown /> </User.Menu>
			<User.Dropdown>
				<User.Logout onClick={ logoutUser }>Log out</User.Logout>
			</User.Dropdown>
		</User>
	)
}

export default UserContainer
