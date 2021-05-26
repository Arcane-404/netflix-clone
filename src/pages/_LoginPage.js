import React from 'react'
import { Link } from 'react-router-dom'
import { Background, NavBar, SigninForm } from '../components'

const logo = {
	img: '/images/logo.svg'
}

const bg = {
	img: '/images/home-bg.jpg'
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

			<SigninForm>
				<SigninForm.Inner>

					<SigninForm.Title>Sign In</SigninForm.Title>
					<SigninForm.Input type="text" placeholder="Email or phone number"/>
					<SigninForm.Input type="password" placeholder="Password"/>
					<SigninForm.Button> Sign In </SigninForm.Button>

					<SigninForm.Frame>
						<SigninForm.Content>
							New to Netflix?
						</SigninForm.Content>
						<Link to="/">
							<SigninForm.Link>Sign up now.</SigninForm.Link>
						</Link>
					</SigninForm.Frame>

				</SigninForm.Inner>
			</SigninForm>
		</Background>
	)
}

export default LoginPage
