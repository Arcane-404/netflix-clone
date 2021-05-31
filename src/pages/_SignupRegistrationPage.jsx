import React from 'react'
import { useLocation } from 'react-router-dom'
import { RegistrationContainer, SignupNavBarContainer } from '../containers'

const SignupRegistrationPage = () => {
	return (
		<>
			<SignupNavBarContainer />
			<RegistrationContainer/>
		</>
	)
}

export default SignupRegistrationPage
