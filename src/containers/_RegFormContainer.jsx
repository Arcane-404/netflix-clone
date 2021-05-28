import React from 'react'
import { RegForm } from '../components'

const RegFormContainer = () => {
	return (
		<>
			<RegForm>
				<RegForm.Inner>
					<RegForm.PreTitle>
						STEP
						<RegForm.Span>1</RegForm.Span>
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
					<RegForm.Button>Continue</RegForm.Button>
				</RegForm.Inner>
			</RegForm>
		</>
	)
}

export default RegFormContainer
