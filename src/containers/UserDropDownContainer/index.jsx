import React from 'react'
import { useHistory } from 'react-router-dom'
import { DropDown } from '../../components'
import { FirebaseConsumer } from '../../contexts/consumers'
import { useEventListener } from '../../hooks'

const UserDropDownContainer = ({ isOpen, setOpen }) => {
	const history = useHistory()
	const { firebase } = FirebaseConsumer()

	const logOutUser = () => {
		firebase.auth().signOut()
		history.push('/logout')
	}

	const closeDropDown = (e) => {
		if (isOpen && !e.target.closest('[data-dropdown]')) return setOpen(false)
	}

	useEventListener('click', closeDropDown)

	return (
		<DropDown user data-dropdown>
			<DropDown.ListOne>
				<DropDown.Option disabled>Switch Profiles</DropDown.Option>
			</DropDown.ListOne>

			<DropDown.Line horizontal />

			<DropDown.ListTwo>
				<DropDown.Option disabled>Account</DropDown.Option>
				<DropDown.Option href="https://help.netflix.com/">Help Center</DropDown.Option>
				<DropDown.Option onClick={ logOutUser }>Sign out of Netflix</DropDown.Option>
			</DropDown.ListTwo>
		</DropDown>
	)
}

export default UserDropDownContainer
