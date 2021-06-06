import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SignupForm, Icon } from '../../components'
import { EmailContext } from '../../custom/EmailContext'

const signup = {
	title: 'Ready to watch? Enter your email to create or restart your membership.',
	label: 'Email Address'
}

const SignupFormContainer = () => {

	const [ email, setEmail ] = useState('')
	const [ error, setError ] = useState('')

	const { signupEmail, setSignupEmail } = useContext( EmailContext )

	const handleChange = (e) => {
		setEmail(e.target.value)
	}

	const history = useHistory()

	const formSubmit = (e) => {
		e.preventDefault()
		setSignupEmail(email)
		console.log(email)
		history.push('/signup/registration')
	}

	useEffect( () => {
		if ( signupEmail ) {
			setEmail( signupEmail )
		}
	}, [ signupEmail ])

	return (
		<SignupForm onSubmit={ formSubmit }>
			<SignupForm.Title>
				{ signup.title }
			</SignupForm.Title>

			<SignupForm.Inner>
				<SignupForm.Frame>
					<SignupForm.Input
						id="email"
						placeholder=" "
						value={ email }
						onChange={ handleChange }
						required
						error={ error }
					/>

					<SignupForm.Label htmlFor="email">
						{ signup.label }
					</SignupForm.Label>

					{error && (
						<SignupForm.Error>
							{ error || 'Email is required!' }
						</SignupForm.Error>
					)}
				</SignupForm.Frame>

				<SignupForm.Button>
					Get Started <SignupForm.Icon />
				</SignupForm.Button>
			</SignupForm.Inner>
		</SignupForm>
	)
}

export default SignupFormContainer
