import React from 'react'
import { useHistory } from 'react-router-dom'
import { DropDown } from '../../components'
import { FirebaseConsumer } from '../../contexts/consumers'

const UserDropDownContainer = () => {
	const history = useHistory()
	const { firebase } = FirebaseConsumer()

	const logOutUser = () => {
		firebase.auth().signOut()
		history.push('/logout')
	}

	return (
		<DropDown user>
			<DropDown.ListOne>
				<DropDown.Option>Switch Profiles</DropDown.Option>
			</DropDown.ListOne>

			<DropDown.Line />

			<DropDown.ListTwo>
				<DropDown.Option>Account</DropDown.Option>
				<DropDown.Option href="https://help.netflix.com/">Help Center</DropDown.Option>
				<DropDown.Option onClick={ logOutUser }>Sign out of Netflix</DropDown.Option>
			</DropDown.ListTwo>
		</DropDown>
	)
}

export default UserDropDownContainer
