import React from 'react'
import { NavBar } from '../../components'
import { logo } from '../../json'

const HomeNavBarContainer = () => {
	return (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo grow src={ logo.img } alt={ logo.alt } />
				<NavBar.Button to="/login"> Sign In </NavBar.Button>
			</NavBar.Inner>
		</NavBar>
	)
}

export default HomeNavBarContainer
