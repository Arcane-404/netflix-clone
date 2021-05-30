import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { RegForm } from '../components'
import { EmailContext } from '../custom/EmailContext'

const RegFormContainer = () => {

	const { signupEmail } = useContext( EmailContext )
	const history = useHistory()

	const [ email, setEmail ] = useState(signupEmail)
	const [ password, setPassword ] = useState('')
	const [ emailFocus, setEmailFocus ] = useState(false)
	const [ passwordFocus, setPasswordFocus ] = useState(false)
	const [ emailError, setEmailError ] = useState(false)
	const [ passwordError, setPasswordError ] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		// history.push('/signup')
		if (email === '') {
			setEmailError(true)
			console.log('Email is required!')
		}
		if (password === '') {
			setPasswordError(true)
			console.log('Password is required!')
		}
	}

	useEffect( () => {
		if ( password !== '' ) {
			setPasswordError(false)
		}
		if ( email !== '' ) {
			setEmailError(false)
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

					<RegForm.Title>
						Create a password to start your membership.
					</RegForm.Title>

					<RegForm.SubTitle>
						Just a few more steps and you`re done! We hate paperwork, too.
					</RegForm.SubTitle>

					<RegForm.Frame>
						<RegForm.Input
							type="text"
							id="email"
							placeholder=" "
							value={ email }
							onChange={ ({ target }) => setEmail(target.value) }
							error={ emailError ? true : false }
						/>
						<RegForm.Label
							htmlFor="email"
						>
							Email
						</RegForm.Label>
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
						<RegForm.Label
							htmlFor="password"
						>
							Add a password
						</RegForm.Label>
						{ passwordError && <p>Password is required!</p>}
					</RegForm.Frame>

					<RegForm.Button>
						Continue
					</RegForm.Button>
				</RegForm.Inner>
			</RegForm>
		</>
	)
}

export default RegFormContainer
