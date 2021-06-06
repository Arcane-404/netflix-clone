import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { RegForm } from '../../components'
import { FirebaseContext, EmailContext } from '../../contexts'
import { auth } from '../../json'
const { FirebaseContexts } = FirebaseContext
const { EmailContexts } = EmailContext
// import { EmailContext } from '../../custom/EmailContext'
// import { FirebaseContext } from '../../custom/_firebaseContext'

const RegFormContainer = () => {

	const { signupEmail } = useContext( EmailContexts )
	const { firebase } = useContext( FirebaseContexts )
	const history = useHistory()

	const [ email, setEmail ] = useState(signupEmail)
	const [ password, setPassword ] = useState('')
	const [ emailError, setEmailError ] = useState(false)
	const [ passwordError, setPasswordError ] = useState(false)
	const [ error, setError ] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (email === '') {
			setEmailError(true)
			console.log('Email is required!')
		}
		if (password === '') {
			setPasswordError(true)
			console.log('Password is required!')
		}
		else {
			firebase.auth().createUserWithEmailAndPassword( email, password )
			.then( result =>
				result.user.updateProfile({
					displayName: email
				})
				.then( () => {
					history.push('/signup')
				})
			)
			.catch( ( err ) => {
				setEmail('')
				setPassword('')
				// console.log(err.message)
				setError(err.message)
			})
		}
	}

	useEffect( () => {
		if ( password !== '' ) {
			setPasswordError(false)
			setError(false)
		}
		if ( email !== '' ) {
			setEmailError(false)
			setError(false)
		}
	}, [ email, password ])

	return (
		<>
			<RegForm>
				<RegForm.Inner onSubmit={ handleSubmit }>
					<RegForm.PreTitle>
						STEP
						<RegForm.Span>2</RegForm.Span>
						OF
						<RegForm.Span>3</RegForm.Span>
					</RegForm.PreTitle>

					<RegForm.Title>{ auth.regForm.title }</RegForm.Title>
					<RegForm.SubTitle>{ auth.regForm.subtitle }</RegForm.SubTitle>

					<RegForm.Frame>
						<RegForm.Input
							type="text"
							id="email"
							placeholder=" "
							value={ email }
							onChange={ ({ target }) => setEmail(target.value) }
							error={ emailError ? true : false }
						/>
						<RegForm.Label htmlFor="email">Email</RegForm.Label>
						{ emailError && <p>Email is required!</p> }
					</RegForm.Frame>

					<RegForm.Frame>
						<RegForm.Input
							type="password"
							id="password"
							placeholder= " "
							value={ password }
							onChange={ ({ target }) => setPassword(target.value)  }
							error={ passwordError ? true : false }
						/>
						<RegForm.Label htmlFor="password">Add a password</RegForm.Label>
						{ passwordError && <p>Password is required!</p>}
					</RegForm.Frame>

					{ error && <RegForm.Error>{ error }</RegForm.Error> }
					<RegForm.Button>{ auth.regForm.button }</RegForm.Button>
				</RegForm.Inner>
			</RegForm>
		</>
	)
}

export default RegFormContainer
