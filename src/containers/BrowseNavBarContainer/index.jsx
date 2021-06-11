import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchBarContainer } from '../'
import { NavBar } from '../../components'
import { logo } from '../../json'
import { useEventListener, useMediaQuery } from '../../hooks'
import { FirebaseContext } from '../../contexts'
const { FirebaseContexts } = FirebaseContext

const BrowseNavBarContainer = (props) => {

	const [ isSticky, setSticky ] = useState(false)
	const [ menu, setMenu ] = useState(true)
	const isMobile = useMediaQuery('mobile')
	const isTabletSm = useMediaQuery('tablet-sm')
	const isDesktop = useMediaQuery('desktop')
	const history = useHistory()
	const { firebase } = useContext(FirebaseContexts)

	const handleToggle = () => setMenu(!menu)

	const logoutUser = () => {
		firebase.auth().signOut()
		history.push('/logout')
	}

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
					{isMobile && ((menu)
						? <NavBar.Menu onClick={ handleToggle } />
						: <NavBar.Close onClick={ handleToggle } />
					)}

					<NavBar.Logo page={ 'browse' } src={ logo.img } alt={ logo.alt } to="/browse" />

					{!isMobile && (
						<NavBar.FilterBox>
							{isTabletSm && !isDesktop && (
								<NavBar.Text primary>Browse</NavBar.Text>
							)}
							{isDesktop && (
								<>
									<NavBar.Text className={ 'active' }>Home</NavBar.Text>
									{/* <NavBar.Text>TV Shows</NavBar.Text> */}
									{/* <NavBar.Text>Movies</NavBar.Text> */}
								</>
							)}
						</NavBar.FilterBox>
					)}
				</NavBar.Box>

				<NavBar.Box>
					{/* <SearchBarContainer { ...props } /> */}
					{/* ProfileOption */}
					<NavBar.Logout onClick={ logoutUser }>Log out</NavBar.Logout>
				</NavBar.Box>
			</NavBar.Inner>
		</NavBar>
	)
}

export default BrowseNavBarContainer
