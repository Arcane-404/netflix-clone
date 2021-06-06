import React from 'react'
import { useHistory } from 'react-router-dom'
import { Registration } from '../../components'
import { auth } from '../../json'

const RegistrationContainer = () => {

	const history = useHistory()

	const onContinue = () => {
		history.push('/signup/regform')
	}

	return (
		<Registration>

			<Registration.Inner>
				<Registration.Image src="/images/Devices.png" alt="registration" />

				<Registration.PreTitle>
					STEP
					<Registration.Span>1</Registration.Span>
					OF
					<Registration.Span>3</Registration.Span>
				</Registration.PreTitle>

				<Registration.Title>{ auth.registration.title }</Registration.Title>
				<Registration.SubTitle>{ auth.registration.subtitle }</Registration.SubTitle>
				<Registration.Button onClick={ onContinue }>{ auth.registration.button }</Registration.Button>
			</Registration.Inner>

		</Registration>
	)
}

export default RegistrationContainer
