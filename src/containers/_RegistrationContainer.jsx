import React from 'react'
import { Registration } from '../components'
import { useHistory } from 'react-router-dom'

const RegistrationContainer = () => {

	const history = useHistory()

	const onContinue = () => {
		history.push('/signup/regform')
	}

	return (
		<Registration>

			<Registration.Inner>
				<Registration.Image src="/images/Devices.png" alt="registration"/>

				<Registration.PreTitle>
					STEP
					<Registration.Span>1</Registration.Span>
					OF
					<Registration.Span>3</Registration.Span>
				</Registration.PreTitle>

				<Registration.Title>Finish Setting up your account. </Registration.Title>
				<Registration.SubTitle>
					Netflix is personalized for you. Create a password to watch Netflix on any device at any time.
				</Registration.SubTitle>
				<Registration.Button
					onClick={ onContinue }
				>
					Continue
				</Registration.Button>
			</Registration.Inner>

		</Registration>
	)
}

export default RegistrationContainer
