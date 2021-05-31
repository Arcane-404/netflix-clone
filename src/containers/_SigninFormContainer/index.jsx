import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Signin } from '../../components'

const SigninFormContainer = () => {

	const [ toggle, setToggle ] = useState(false)
	const [ emailToggle, setEmailToggle ] = useState(false)

	const toggleLearnMore = () => {
		setToggle( !toggle )
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<Signin>
			<Signin.Form onSubmit={ handleSubmit }>

				<Signin.Title>Sign In</Signin.Title>

				<Signin.InputFrame>
					<Signin.Input
						type="text"
						placeholder=" "
						id="email"
					/>
					<Signin.Label
						for="email"
					>
						Email of phone number
					</Signin.Label>
				</Signin.InputFrame>

				<Signin.InputFrame>
					<Signin.Input
						type="password"
						placeholder=" "
						id="password"
					/>
					<Signin.Label
						for="password"
					>
						Password
					</Signin.Label>
				</Signin.InputFrame>

				<Signin.Button> Sign In </Signin.Button>

				<Signin.CheckboxLabel htmlFor="rememberMe">
					<Signin.Checkbox type="checkbox" id="rememberMe"/>
					Remember me
				</Signin.CheckboxLabel>

				<Signin.Frame>
					<Signin.Content>
						New to Netflix?
					</Signin.Content>
					<Link to="/">
						<Signin.Link>Sign up now.</Signin.Link>
					</Link>
				</Signin.Frame>

				<Signin.ReCaptchaHeader>
					This page is protected by Google reCAPTCHA to ensure you`re not a bot.
					<Signin.LearnMoreLink
						onClick={ toggleLearnMore }
					>
						Learn More.
					</Signin.LearnMoreLink>
				</Signin.ReCaptchaHeader>

				{ toggle &&
					<Signin.ReCaptchaBody>
						The ination collected by Google reCAPTCHA is subject to the
						Google
						<Signin.ReCaptchaLink
							href="https://policies.google.com/privacy"
							target="_blank"
						>
								Privacy Policy
						</Signin.ReCaptchaLink> and
						<Signin.ReCaptchaLink
							href="https://policies.google.com/terms"
							target="_blank"
						>
							Terms of Service
						</Signin.ReCaptchaLink>,
						and is used for providing, maintaining, and improving the
						reCAPTCHA service and for general security purposes
						(it is not used for personalized advertising by Google).
					</Signin.ReCaptchaBody>
				}

			</Signin.Form>
		</Signin>
	)
}

export default SigninFormContainer
