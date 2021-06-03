import React from 'react'
import { NavBar } from '../../components'
import { logo } from '../../json'

const HomeNavBarContainer = () => {
	return (
		<NavBar page={ 'home' }>
			<NavBar.Inner>
				<NavBar.Logo page={ 'home' } src={ logo.img } alt={ logo.alt } />
				<NavBar.Button to="/login">Sign In</NavBar.Button>
			</NavBar.Inner>
		</NavBar>
	)
}

export default HomeNavBarContainer
