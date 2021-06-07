import React from 'react'
import { Background } from '../components'
import { LoginNavBarContainer, LoginFormContainer } from '../containers'

const LoginPage = () => {
	return (
		<Background>
			<LoginNavBarContainer />
			<LoginFormContainer />
		</Background>
	)
}

export default LoginPage
