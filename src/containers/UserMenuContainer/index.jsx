import React from 'react'
import { User } from '../../components'
import { UserDropDownContainer } from '../../containers'
import { logo } from '../../json'

const UserContainer = () => {
	return (
		<User>
			<User.Box>
				<User.Avatar src={ logo.avatar } alt={ logo.alt } />
				<User.Name>User</User.Name>
				{/* <User.CaretDown /> */}
			</User.Box>

			<UserDropDownContainer />
		</User>
	)
}

export default UserContainer
