import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SignupForm, Icon } from '../components'

const SignupFormContainer = () => {

	const [ email, setEmail ] = useState('')

	const handleChange = (e) => {
		setEmail(e.target.value)
	}

	const history = useHistory()

	const formSubmit = (e) => {
		e.preventDefault()
		history.push('/signup/registration')
	}

	return (
		<SignupForm>
			<SignupForm.Title>
				Ready to watch? Enter your email to create or restart your membership.
			</SignupForm.Title>

			<SignupForm.Form onSubmit={ formSubmit }>
				<SignupForm.Input
					type="text"
					placeholder="Email address"
					value={email}
					onChange={ handleChange }
				/>
				<SignupForm.Button>
					Get Started <Icon.FaChevronRight />
				</SignupForm.Button>
			</SignupForm.Form>

		</SignupForm>
	)
}

export default SignupFormContainer
