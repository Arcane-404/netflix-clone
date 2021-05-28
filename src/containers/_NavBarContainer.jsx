import React from 'react'
import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { NavBar } from '../components/'

const logo = {
	img: '/images/logo.svg'
}

const NavBarContainer = () => {

	const history = useHistory()

	const navToHome = () => {
		history.push('/')
	}

	return (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo
					src={ logo.img }
					onClick={ navToHome }
				/>
				<NavBar.Button to="/login"> Sign In </NavBar.Button>
			</NavBar.Inner>
		</NavBar>
	)
}

export default NavBarContainer
