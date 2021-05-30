import React from 'react'
import { SearchBarContainer } from '../'
import { NavBar, Box } from '../../components'
import { logo } from '../../json'

const BrowseNavBarContainer = () => {
	return (
		<NavBar browse>
			<NavBar.Inner>
				<Box>
					<NavBar.Logo src={ logo.img } alt={ logo.alt } to="/browse" />
				</Box>
				<Box>
					<SearchBarContainer />
				</Box>
			</NavBar.Inner>
			{/*
			- MenuBar
			- BrowserFilter
			- ProfileOption
			*/}
		</NavBar>
	)
}

export default BrowseNavBarContainer
