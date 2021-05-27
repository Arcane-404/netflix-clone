import React from 'react'
import { Link } from 'react-router-dom'
import { SignupForm, Icon } from '../components'

const SignupFormContainer = () => {
	return (
		<SignupForm>
			<SignupForm.Title>
				Ready to watch? Enter your email to create or restart your membership.
			</SignupForm.Title>
			<SignupForm.Form>
				<SignupForm.Input type="text" placeholder="Email address"/>
				<SignupForm.Button>
					Get Started
					<Icon.FaChevronRight />
				</SignupForm.Button>
			</SignupForm.Form>
		</SignupForm>
	)
}

export default SignupFormContainer
