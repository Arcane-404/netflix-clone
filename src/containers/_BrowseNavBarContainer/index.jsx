import React, { useState } from 'react'
import { SearchBarContainer } from '../'
import { NavBar } from '../../components'
import { logo } from '../../json'
import { useMediaQuery } from '../../custom'

/*
- nav active ft
- search bar motion
*/

const BrowseNavBarContainer = () => {

	const [ menu, setMenu ] = useState(true)
	const handleToggle = () => setMenu(!menu)
	const isMobile = useMediaQuery('mobile')
	const isTablet = useMediaQuery('tablet')
	const isDesktop = useMediaQuery('desktop')

	return (
		<NavBar browse>
			<NavBar.Inner>
				<NavBar.Box>
					{isMobile && ((menu)
						? <NavBar.Menu onClick={ handleToggle } />
						: <NavBar.Close onClick={ handleToggle } />
					)}

					<NavBar.Logo src={ logo.img } alt={ logo.alt } to="/browse" />

					{!isMobile && (
						<NavBar.FilterBox>
							{isTablet && !isDesktop && (
								<NavBar.Text primary>Browse</NavBar.Text>
							)}
							{isDesktop && (
								<>
									<NavBar.Text className={ 'active' }>Home</NavBar.Text>
									<NavBar.Text>TV Shows</NavBar.Text>
									<NavBar.Text>Movies</NavBar.Text>
								</>
							)}
						</NavBar.FilterBox>
					)}
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
