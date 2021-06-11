import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SignupForm } from '../../components'
import { EmailContext } from '../../contexts'
import { auth } from '../../json'
const { EmailContexts } = EmailContext

const SignupFormContainer = () => {

	const [ email, setEmail ] = useState('')
	const [ error, setError ] = useState('')

	const { signupEmail, setSignupEmail } = useContext( EmailContexts ) // ✓


	const handleChange = (e) => {
		setEmail(e.target.value)
	}

	const history = useHistory()

	const formSubmit = (e) => {
		e.preventDefault()
		setSignupEmail(email)
		// console.log(email)
		history.push('/signup/registration')
	}

	useEffect( () => {
		if ( signupEmail ) {
			setEmail( signupEmail )
		}
	}, [ signupEmail ]) // ✓

	return (
		<SignupForm onSubmit={ formSubmit }>
			<SignupForm.Title>{ auth.signupForm.title }</SignupForm.Title>

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

					<SignupForm.Label htmlFor="email">{ auth.signupForm.label }</SignupForm.Label>
					{error && <SignupForm.Error>{ error || 'Email is required!' }</SignupForm.Error>}
				</SignupForm.Frame>

				<SignupForm.Button>{ auth.signupForm.button } <SignupForm.Icon /></SignupForm.Button>
			</SignupForm.Inner>
		</SignupForm>
	)
}

export default SignupFormContainer
