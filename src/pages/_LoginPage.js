import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Background, NavBar, SigninForm } from '../components'

const logo = {
	img: '/images/logo.svg'
}

const LoginPage = () => {

	const [ toggle, setToggle ] = useState(false)

	const toggleLearnMore = () => {
		setToggle( !toggle )
	}

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

					<SigninForm.CheckboxLabel for="rememberMe">
						<SigninForm.Checkbox type="checkbox" id="rememberMe"/>
						Remember me
					</SigninForm.CheckboxLabel>

					<SigninForm.Frame>
						<SigninForm.Content>
							New to Netflix?
						</SigninForm.Content>
						<Link to="/">
							<SigninForm.Link>Sign up now.</SigninForm.Link>
						</Link>
					</SigninForm.Frame>

					<SigninForm.ReCaptchaHeader>
						This page is protected by Google reCAPTCHA to ensure you`re not a bot.
						<SigninForm.LearnMoreLink
							onClick={ toggleLearnMore }
						>
							Learn More.
						</SigninForm.LearnMoreLink>
					</SigninForm.ReCaptchaHeader>

					{ toggle &&
						<SigninForm.ReCaptchaBody>
							The information collected by Google reCAPTCHA is subject to the
							Google
							<SigninForm.ReCaptchaLink
								href="https://policies.google.com/privacy"
								target="_blank"
							>
									Privacy Policy
							</SigninForm.ReCaptchaLink> and
							<SigninForm.ReCaptchaLink
								href="https://policies.google.com/terms"
								target="_blank"
							>
								Terms of Service
							</SigninForm.ReCaptchaLink>,
							and is used for providing, maintaining, and improving the
							reCAPTCHA service and for general security purposes
							(it is not used for personalized advertising by Google).
						</SigninForm.ReCaptchaBody>
					}

				</SigninForm.Inner>
			</SigninForm>
		</Background>
	)
}

export default LoginPage
