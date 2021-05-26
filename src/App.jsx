import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage } from './pages/'

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/"> <HomePage/> </Route>
				<Route path="/login"> <LoginPage/> </Route>
				<Route path="/signup"> <SignupPage/> </Route>
				<Route path="/browse"> </Route>
			</Switch>
		</>
	)
}

export default App
