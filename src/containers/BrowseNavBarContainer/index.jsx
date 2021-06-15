import React, { useState } from 'react'
import { FilterMenuContainer, SearchBarContainer, UserMenuContainer } from '../../containers'
import { NavBar } from '../../components'
import { logo } from '../../json'
import { useEventListener } from '../../hooks'

const BrowseNavBarContainer = (props) => {

	const [ isSticky, setSticky ] = useState(false)
	const [ menu, setMenu ] = useState(true)

	const handleToggle = () => setMenu(!menu)

	const handleScroll = (e) => {
		const offset = window.scrollY
		if (isSticky && offset > 100) return
		if (offset > 0) setSticky(true)
		else setSticky(false)
	}

	useEventListener('scroll', handleScroll)

	return (
		<NavBar page={ 'browse' } sticky={ isSticky }>
			<NavBar.Inner>
				<NavBar.Box>
					<NavBar.Logo page={ 'browse' } src={ logo.img } alt={ logo.alt } to="/browse" />
					<FilterMenuContainer />
				</NavBar.Box>

				<NavBar.Box>
					{/* <SearchBarContainer { ...props } /> */}
					<UserMenuContainer />
				</NavBar.Box>
			</NavBar.Inner>
		</NavBar>
	)
}

export default BrowseNavBarContainer
