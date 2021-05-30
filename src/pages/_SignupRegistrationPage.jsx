import React from 'react'
import { useLocation } from 'react-router-dom'
import { RegistrationContainer, GeneralNavBarContainer } from '../containers'

const SignupRegistrationPage = () => {
	return (
		<>
			<GeneralNavBarContainer />
			<RegistrationContainer/>
		</>
	)
}

export default SignupRegistrationPage
