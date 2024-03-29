import React from 'react'
import { NavBar } from '../../components'
import { logo } from '../../json'

const SignupNavBarContainer = () => {
	return (
		<NavBar page={ 'signup' }>
			<NavBar.Inner>
				<NavBar.Logo page={ 'signup' } src={ logo.img } alt={ logo.alt } to="/" />
				<NavBar.Anchor to="/login">Sign In</NavBar.Anchor>
			</NavBar.Inner>
		</NavBar>
	)
}

export default SignupNavBarContainer
