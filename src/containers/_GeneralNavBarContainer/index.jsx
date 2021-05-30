import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { NavBar } from '../../components/'
import { navbar } from './content'

const GeneralNavBarContainer = () => {
	const { url } = useRouteMatch()
	const isNotHomePage = url !== '/' && '/'

	return (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo src={ navbar.img } alt={ navbar.alt } to={ isNotHomePage } />
				{(url === '/')
					? <NavBar.Button to="/login"> Sign In </NavBar.Button>
					: (url !== '/login')
						? <NavBar.Anchor to="/login"> Sign In </NavBar.Anchor>
						: null}
			</NavBar.Inner>
		</NavBar>
	)
}

export default GeneralNavBarContainer
