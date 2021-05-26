import React from 'react'
import { NavBar, Footer } from '../components/'
import { Link } from 'react-router-dom'

const logo = {
	img: '/images/logo.svg'
}

export default function HomePage () {
	return (
		<>
			<NavBar>
				<NavBar.Inner>
					<NavBar.Logo src={logo.img} />
					<Link to="/login">
						<NavBar.Button> Sign In </NavBar.Button>
					</Link>
				</NavBar.Inner>
			</NavBar>
			<Footer>
				Han Solo
			</Footer>
		</>
	)
}
