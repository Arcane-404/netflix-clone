import React from 'react'
import { useHistory } from 'react-router-dom'
import { RegForm } from '../components'

const RegFormContainer = () => {

	const history = useHistory()

	const handleClick = () => {
		history.push('/signup')
	}

	return (
		<>
			<RegForm>
				<RegForm.Inner>
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
					<RegForm.Input type="text" placeholder="Email"/>
					<RegForm.Input type="password" placeholder="Add a password"/>
					<RegForm.Button
						onClick={ handleClick }
					>
						Continue
					</RegForm.Button>
				</RegForm.Inner>
			</RegForm>
		</>
	)
}

export default RegFormContainer
