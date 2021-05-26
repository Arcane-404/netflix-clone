import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Wrapper, Jumbotron, PopupModal, Footer } from '../components/'

const logo = {
	img: '/images/logo.svg'
}

const HomePage = () => {
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

			<Wrapper>
				the text here solo
			</Wrapper>

      <PopupModal>Popup Modal Card</PopupModal>

			<Jumbotron>
				<Jumbotron.Frame>
					<h1>Jumbotron :D</h1>
				</Jumbotron.Frame>
			</Jumbotron>

			<Footer>
				Han Solo
			</Footer>
		</>
	)
}

export default HomePage
