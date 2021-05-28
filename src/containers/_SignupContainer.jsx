import React from 'react'
import { Signup } from '../components'

const img = {
	src: '/images/check.png'
}

const SignupContainer = () => {
	return (
		<Signup>
			<Signup.Inner>
				<Signup.Image src={img.src} alt="img"/>

				<Signup.PreTitle>
					STEP
					<Signup.Span>3</Signup.Span>
					OF
					<Signup.Span>3</Signup.Span>
				</Signup.PreTitle>

				<Signup.Title>Congratulations on signing up!</Signup.Title>
				<Signup.SubTitle>Now you can access all of Netflix`s Features</Signup.SubTitle>
				<Signup.Button> Continue to Browse </Signup.Button>
			</Signup.Inner>
		</Signup>
	)
}

export default SignupContainer
