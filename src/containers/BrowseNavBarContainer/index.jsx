import React, { useState } from 'react'
import { FilterContainer, SearchBarContainer, UserContainer } from '../../containers'
import { NavBar } from '../../components'
import { logo } from '../../json'
import { useEventListener } from '../../hooks'
// import { useEventListener, useMediaQuery } from '../../hooks'

const BrowseNavBarContainer = (props) => {

	const [ isSticky, setSticky ] = useState(false)
	const [ menu, setMenu ] = useState(true)
	// const isMobile = useMediaQuery('mobile')
	// const isTabletSm = useMediaQuery('tablet-sm')
	// const isDesktop = useMediaQuery('desktop')

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
					<FilterContainer />
				</NavBar.Box>

				<NavBar.Box>
					{/* <SearchBarContainer { ...props } /> */}
					<UserContainer />
				</NavBar.Box>
			</NavBar.Inner>
		</NavBar>
	)
}

export default BrowseNavBarContainer
