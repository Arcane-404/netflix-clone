import React from 'react'
import { useLocation } from 'react-router-dom'

const SignupRegistrationPage = () => {

	const location = useLocation()
	console.log( location.pathname )

	return (
		<>
			<h1>Finish setting up your account</h1>
		</>
	)
}

export default SignupRegistrationPage
