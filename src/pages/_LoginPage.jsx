import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Background, NavBar } from '../components'
import { SigninFormContainer } from '../containers'

const logo = {
	img: '/images/logo.svg'
}

const LoginPage = () => {
	return (
		<Background>
			<NavBar>
				<NavBar.Inner>
					<Link to="/">
						<NavBar.Logo src={logo.img}/>
					</Link>
				</NavBar.Inner>
			</NavBar>
			<SigninFormContainer/>
		</Background>
	)
}

export default LoginPage
