import React from 'react'
import { Background } from '../components'
import { SigninFormContainer, LoginNavBarContainer } from '../containers'

const LoginPage = () => {
	return (
		<Background>
			<LoginNavBarContainer/>
			<SigninFormContainer/>
		</Background>
	)
}

export default LoginPage
