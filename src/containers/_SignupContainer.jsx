import React from 'react'
import { useHistory } from 'react-router-dom'
import { Signup } from '../components'

const SignupContainer = () => {

	const history = useHistory()

	const handleClick = () => {
		history.push('/browse')
	}

	return (
		<Signup>
			<Signup.Inner>
				<Signup.Image src="/images/Checkmark.png"/>

				<Signup.PreTitle>
					STEP
					<Signup.Span>3</Signup.Span>
					OF
					<Signup.Span>3</Signup.Span>
				</Signup.PreTitle>

				<Signup.Title>Congratulations on signing up!</Signup.Title>
				<Signup.SubTitle>Now you can access all of Netflix`s Features</Signup.SubTitle>
				<Signup.Button
					onClick={ handleClick }
				>
					Continue to Browse
				</Signup.Button>
			</Signup.Inner>
		</Signup>
	)
}

export default SignupContainer
