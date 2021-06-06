import React from 'react'
import { useHistory } from 'react-router-dom'
import { Signup } from '../../components'
import { auth } from '../../json'

const SignupContainer = () => {

	const history = useHistory()

	const handleClick = () => {
		history.push('/browse')
	}

	return (
		<Signup>
			<Signup.Inner>
				<Signup.Image src={ auth.signup.img } alt={ auth.signup.alt } />

				<Signup.PreTitle>
					STEP
					<Signup.Span>3</Signup.Span>
					OF
					<Signup.Span>3</Signup.Span>
				</Signup.PreTitle>

				<Signup.Title>{ auth.signup.title }</Signup.Title>
				<Signup.SubTitle>{ auth.signup.subtitle }</Signup.SubTitle>
				<Signup.Button onClick={ handleClick }>{ auth.signup.button }</Signup.Button>
			</Signup.Inner>
		</Signup>
	)
}

export default SignupContainer
