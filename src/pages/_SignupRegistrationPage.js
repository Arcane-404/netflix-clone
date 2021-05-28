import React from 'react'
import { useLocation } from 'react-router-dom'
import { RegistrationContainer } from '../containers'

const SignupRegistrationPage = () => {

	const location = useLocation()
	console.log( location.pathname )

	return (
		<>
			<RegistrationContainer/>
		</>
	)
}

export default SignupRegistrationPage
