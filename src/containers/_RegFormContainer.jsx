import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { RegForm } from '../components'

const RegFormContainer = () => {

	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		// history.push('/signup')
		console.log(email, password)
	}

	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ emailFocus, setEmailFocus ] = useState(false)
	const [ passwordFocus, setPasswordFocus ] = useState(false)

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
						/>
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
						/>
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
