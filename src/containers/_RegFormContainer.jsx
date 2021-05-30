import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RegForm } from '../components'

const RegFormContainer = () => {

	const history = useHistory()
	const [ email, setEmail ] = useState('')
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
		<div>
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

					<RegForm.Frame onClick={ () => setEmailFocus(true) } >
						<RegForm.Label
							focus={ emailFocus ? true : false }
						>
							Email
						</RegForm.Label>
						<RegForm.Input
							type="text"
							value={ email }
							onChange={ ({ target }) => setEmail(target.value) }
							error={ emailError ? true : false }
						/>
						{ emailError && <p>Email is required!</p> }
					</RegForm.Frame>

					<RegForm.Frame onClick={ () => setPasswordFocus(true) } >
						<RegForm.Label
							focus={ passwordFocus ? true : false }
						>
							Add a password
						</RegForm.Label>
						<RegForm.Input
							type="password"
							value={ password }
							onChange={ ({ target }) => setPassword(target.value)  }
							error={ passwordError ? true : false }
						/>
						{ passwordError && <p>Password is required!</p>}
					</RegForm.Frame>

					<RegForm.Button>
						Continue
					</RegForm.Button>
				</RegForm.Inner>
			</RegForm>
		</div>
	)
}

export default RegFormContainer
