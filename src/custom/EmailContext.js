import React, { useState, createContext } from 'react'

const EmailContext = createContext()

const EmailContextProvider = ({ children }) => {

	const [ signupEmail, setSignupEmail ] = useState()

	return (
		<EmailContext.Provider value={{ signupEmail, setSignupEmail }}>
			{ children }
		</EmailContext.Provider>
	)
}

export { EmailContext, EmailContextProvider }
