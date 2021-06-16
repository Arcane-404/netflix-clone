import React, { useState } from 'react'
import { User } from '../../components'
import { UserDropDownContainer } from '../../containers'
import { logo } from '../../json'

const UserContainer = () => {

	const [ isOpen, setOpen ] = useState(false)
	const openDropDown = () => setOpen(true)

	const dropDownProps = {
		isOpen,
		setOpen
	}

	return (
		<User>
			<User.Box onClick={ openDropDown }>
				<User.Avatar src={ logo.avatar } alt={ logo.alt } />
				<User.Name>User</User.Name>
				{/* <User.CaretDown /> */}
			</User.Box>

			{ isOpen && <UserDropDownContainer { ...dropDownProps } /> }
		</User>
	)
}

export default UserContainer
