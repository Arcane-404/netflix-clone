import React, { useState } from 'react'
import { SearchBarContainer } from '../'
import { NavBar } from '../../components'
import { logo } from '../../json'

const BrowseNavBarContainer = () => {

	const [ menu, setMenu ] = useState(true)
	const handleToggle = () => setMenu(!menu)

	return (
		<NavBar browse>
			<NavBar.Inner>
				<NavBar.Box>
					{(menu)
						? <NavBar.Menu onClick={ handleToggle } />
						: <NavBar.Close onClick={ handleToggle } />
					}
					<NavBar.Logo src={ logo.img } alt={ logo.alt } to="/browse" />
					{/* BrowseFilter */}
				</NavBar.Box>

				<NavBar.Box>
					<SearchBarContainer />
					{/* ProfileOption */}
				</NavBar.Box>
			</NavBar.Inner>
		</NavBar>
	)
}

export default BrowseNavBarContainer
