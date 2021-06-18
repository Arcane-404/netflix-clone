import React, { useState, createContext, useContext } from 'react'

const EmailContexts = createContext()

const EmailConsumer = () => useContext(EmailContexts)

const EmailContextProvider = ({ children }) => {

	const [ signupEmail, setSignupEmail ] = useState()
	const value = { signupEmail, setSignupEmail }

	return (
		<EmailContexts.Provider value={ value }>
			{ children }
		</EmailContexts.Provider>
	)
}

export { EmailContexts, EmailContextProvider, EmailConsumer }
