import React from 'react'
import { NavBar } from '../../components'
import { logo } from '../../json'

const LoginNavBarContainer = () => {
	return (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo
					page={ 'login' }
					src={ logo.img }
					alt={ logo.alt }
					to="/"
				/>
			</NavBar.Inner>
		</NavBar>
	)
}

export default LoginNavBarContainer
