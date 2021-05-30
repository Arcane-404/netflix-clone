import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SignupForm, Icon } from '../components'
import { EmailContext } from '../custom/EmailContext'

const SignupFormContainer = () => {

	const [ email, setEmail ] = useState('')
	const [ error, setError ] = useState('')

	const { setSignupEmail } = useContext( EmailContext )

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



	return (
		<SignupForm onSubmit={ formSubmit }>
			<SignupForm.Title>
				Ready to watch? Enter your email to create or restart your membership.
			</SignupForm.Title>

			<SignupForm.Inner>
				<SignupForm.Frame>
					<SignupForm.Input
						type="text"
						id="email"
						// placeholder="Email address"
						placeholder=" "
						value={ email }
						onChange={ handleChange }
						required
						error={ error ? error : '' }
					/>

					<SignupForm.Label htmlFor="email">
						Email Address
					</SignupForm.Label>

					{error && (
						<SignupForm.Error>
							{ error || 'Email is required!' }
						</SignupForm.Error>
					)}
				</SignupForm.Frame>

				<SignupForm.Button>
					Get Started <Icon.ChevronRight />
				</SignupForm.Button>
			</SignupForm.Inner>
		</SignupForm>
	)
}

export default SignupFormContainer
