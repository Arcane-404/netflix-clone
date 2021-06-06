import React, { useState, createContext, useContext } from 'react'

const EmailContexts = createContext()

const EmailConsumer = () => useContext(EmailContexts)

const EmailContextProvider = ({ children }) => {

	const [ signupEmail, setSignupEmail ] = useState()

	return (
		<EmailContexts.Provider value={{ signupEmail, setSignupEmail }}>
			{ children }
		</EmailContexts.Provider>
	)
}

export { EmailContexts, EmailContextProvider, EmailConsumer }
