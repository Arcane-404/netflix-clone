import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { NavBar } from '../../components'
import { logo } from '../../json'

const GeneralNavBarContainer = ({ path = '' }) => {
	const { url } = useRouteMatch()
	path = path || url
	const isNotHomePage = path !== '/' && '/'

	return (
		<NavBar>
			<NavBar.Inner>
				<NavBar.Logo general src={ logo.img } alt={ logo.alt } to={ isNotHomePage } />
				{(path === '/')
					? <NavBar.Button to="/login"> Sign In </NavBar.Button>
					: (path !== '/login')
						? <NavBar.Anchor to="/login"> Sign In </NavBar.Anchor>
						: null}
			</NavBar.Inner>
		</NavBar>
	)
}

export default GeneralNavBarContainer
