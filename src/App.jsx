import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignupPage } from './pages/'

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/"></Route>
				<Route path="/login"> <LoginPage/> </Route>
				<Route path="/signup"> <SignupPage/> </Route>
				<Route path="/browse"> </Route>
			</Switch>
		</>
	)
}

export default App

