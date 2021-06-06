import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Signin } from '../../components'
import { FirebaseContext } from '../../contexts'
import { auth } from '../../json'
const { FirebaseContexts } = FirebaseContext

const SigninFormContainer = () => {

	const [ toggle, setToggle ] = useState(false)
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ emailError, setEmailError ] = useState(false)
	const [ passwordError, setPasswordError ] = useState(false)
	const [ error, setError ] = useState('')

	const { firebase } = useContext( FirebaseContexts )
	const history = useHistory()

	const toggleLearnMore = () => {
		setToggle( !toggle )
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if ( email === '' ) {
			setEmailError(true)
		}
		if ( password === '' ) {
			setPasswordError(true)
		}
		else {
			firebase.auth().signInWithEmailAndPassword(email, password)
			.then( () => {
				setEmail('')
				setPassword('')
				setEmailError('')
				history.push('/browse')
			})
			.catch( (err) => {
				console.log(err.message)
				setError(err.message)
			})
		}
	}

	useEffect( () => {
		if ( email !== '' ) {
			setEmailError(false)
			setError(false)
		}
		if ( password !== '' ) {
			setPasswordError(false)
			setError(false)
		}
	}, [ email, password ])

	return (
		<Signin>
			<Signin.Form onSubmit={ handleSubmit }>

				<Signin.Title>{ auth.login.title }</Signin.Title>

				<Signin.InputFrame>
					<Signin.Input
						type="text"
						placeholder=" "
						id="email"
						value={ email }
						onChange={ ({ target }) => setEmail( target.value ) }
					/>
					<Signin.Label
						htmlFor="email"
					>
						{ auth.login.label.email }
					</Signin.Label>
					{ emailError && <Signin.Error>Please enter a valid email or phone number.</Signin.Error> }
				</Signin.InputFrame>

				<Signin.InputFrame>
					<Signin.Input
						type="password"
						placeholder=" "
						id="password"
						value={ password }
						onChange={ ({ target }) => setPassword( target.value ) }
					/>
					<Signin.Label
						htmlFor="password"
					>
						{ auth.login.label.password }
					</Signin.Label>
					{ passwordError && <Signin.Error>Your password must contain between 4 and 60 characters.</Signin.Error> }
				</Signin.InputFrame>

				{ error && <Signin.FirebaseError>{ error }</Signin.FirebaseError>}
				<Signin.Button> Sign In </Signin.Button>

				<Signin.CheckboxLabel htmlFor="rememberMe">
					<Signin.Checkbox type="checkbox" id="rememberMe" />
					{ auth.login.label.checkbox }
				</Signin.CheckboxLabel>

				<Signin.Frame>
					<Signin.Content>{ auth.login.content.text }</Signin.Content>
					<Link to="/"><Signin.Link>{ auth.login.content.linkText }</Signin.Link></Link>
				</Signin.Frame>

				<Signin.ReCaptchaHeader>
					{ auth.login.reCaptchaHeader.title }
					<Signin.LearnMoreLink	onClick={ toggleLearnMore }>
						{ auth.login.reCaptchaHeader.linkText }
					</Signin.LearnMoreLink>
				</Signin.ReCaptchaHeader>

				{ toggle && (
					<Signin.ReCaptchaBody>
						{ auth.login.reCaptchaBody.text1 }
						<Signin.ReCaptchaLink
							href="https://policies.google.com/privacy"
							target="_blank"
						>
							{ auth.login.reCaptchaBody.linkText1 }
						</Signin.ReCaptchaLink>
						and
						<Signin.ReCaptchaLink
							href="https://policies.google.com/terms"
							target="_blank"
						>
							{ auth.login.reCaptchaBody.linkText2 }
						</Signin.ReCaptchaLink>{', '}
						{ auth.login.reCaptchaBody.text2 }
					</Signin.ReCaptchaBody>
				)}

			</Signin.Form>
		</Signin>
	)
}

export default SigninFormContainer
