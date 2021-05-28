import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/'

const logo = {
	img: '/images/logo.svg'
}

const NavBarContainer = () => {
	return (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo src={logo.img} />
				<Link to="/login">
					<NavBar.Button> Sign In </NavBar.Button>
				</Link>
			</NavBar.Inner>
		</NavBar>
	)
}

export default NavBarContainer
