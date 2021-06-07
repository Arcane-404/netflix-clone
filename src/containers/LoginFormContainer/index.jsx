import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Login } from '../../components'
import { FirebaseContext } from '../../contexts'
import { auth } from '../../json'
const { FirebaseContexts } = FirebaseContext

const errorMsg = {
	email: 'Please enter a valid email or phone number.',
	password: 'Your password must contain between 4 and 60 characters.'
}

const LoginFormContainer = () => {

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
		<Login>
			<Login.Form onSubmit={ handleSubmit }>

				<Login.Title>{ auth.login.title }</Login.Title>

				<Login.InputFrame>
					<Login.Input
						type="text"
						placeholder=" "
						id="email"
						value={ email }
						onChange={ ({ target }) => setEmail( target.value ) }
					/>
					<Login.Label htmlFor="email">{ auth.login.label.email }</Login.Label>
					{ emailError && <Login.Error>{ errorMsg.email }</Login.Error> }
				</Login.InputFrame>

				<Login.InputFrame>
					<Login.Input
						type="password"
						placeholder=" "
						id="password"
						value={ password }
						onChange={ ({ target }) => setPassword( target.value ) }
					/>
					<Login.Label htmlFor="password">{ auth.login.label.password }</Login.Label>
					{ passwordError && <Login.Error>{ errorMsg.password }</Login.Error> }
				</Login.InputFrame>

				{ error && <Login.FirebaseError>{ error }</Login.FirebaseError>}
				<Login.Button>{ auth.login.button }</Login.Button>

				<Login.CheckboxLabel htmlFor="rememberMe">
					<Login.Checkbox type="checkbox" id="rememberMe" />
					{ auth.login.label.checkbox }
				</Login.CheckboxLabel>

				<Login.Frame>
					<Login.Content>{ auth.login.content.text }</Login.Content>
					<Login.Link to="/">{ auth.login.content.linkText }</Login.Link>
				</Login.Frame>

				<Login.ReCaptchaHeader>
					{ auth.login.reCaptchaHeader.title }
					<Login.LearnMoreLink	onClick={ toggleLearnMore }>
						{ auth.login.reCaptchaHeader.linkText }
					</Login.LearnMoreLink>
				</Login.ReCaptchaHeader>

				{ toggle && (
					<Login.ReCaptchaBody>
						{ auth.login.reCaptchaBody.text1 }
						<Login.ReCaptchaLink
							href={ auth.login.reCaptchaBody.link1 }
							target="_blank"
						>
							{ auth.login.reCaptchaBody.linkText1 }
						</Login.ReCaptchaLink>
						and
						<Login.ReCaptchaLink
							href={ auth.login.reCaptchaBody.link2 }
							target="_blank"
						>
							{ auth.login.reCaptchaBody.linkText2 }
						</Login.ReCaptchaLink>{', '}
						{ auth.login.reCaptchaBody.text2 }
					</Login.ReCaptchaBody>
				)}
			</Login.Form>
		</Login>
	)
}

export default LoginFormContainer
