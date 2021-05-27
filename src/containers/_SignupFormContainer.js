import React from 'react'
import { SignupForm } from '../components'

const SignupFormContainer = () => {
	return (
		<SignupForm>
			<SignupForm.Title>
				Ready to watch? Enter your email to create or restart your membership.
			</SignupForm.Title>
			<SignupForm.Form>
				<SignupForm.Input type="text" placeholder="Email address"/>
				<SignupForm.Button>Get Started</SignupForm.Button>
			</SignupForm.Form>
		</SignupForm>
	)
}

export default SignupFormContainer
