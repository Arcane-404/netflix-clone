import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage, BrowsePage, SignupRegistrationPage, RegformPage } from './pages'

const App = () => {
	return (
		<>
			<Switch>

				<Route exact path="/">
					<HomePage />
				</Route>

				<Route path="/login">
					<LoginPage />
				</Route>

				<Route exact path="/signup">
					<SignupPage />
				</Route>

				<Route exact path="/signup/registration">
					<SignupRegistrationPage />
				</Route>

				<Route exact path="/signup/regform">
					<RegformPage />
				</Route>

				<Route path="/browse">
					<BrowsePage />
				</Route>
			</Switch>
		</>
	)
}

export default App
