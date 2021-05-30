import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Background, NavBar } from '../components'
import { SigninFormContainer, GeneralNavBarContainer } from '../containers'

const LoginPage = () => {
	return (
		<Background>
			<GeneralNavBarContainer/>
			<SigninFormContainer/>
		</Background>
	)
}

export default LoginPage
