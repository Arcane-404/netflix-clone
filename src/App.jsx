import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, LogoutPage, SignupPage, BrowsePage, SignupRegistrationPage, RegformPage } from './pages'
import { useAuth } from './custom/'
import { RedirectRoute, ProtectedRoute } from './routes/'

const App = () => {

	const { user } = useAuth()

	return (
		<>
			<Switch>

				<RedirectRoute exact path="/" user={ user } loggedInPath="/browse">
					<HomePage />
				</RedirectRoute>

				<RedirectRoute path="/login" user={ user } loggedInPath="/browse">
					<LoginPage />
				</RedirectRoute>

				<Route path="/logout">
					<LogoutPage />
				</Route>

				<RedirectRoute exact path="/signup" user={ user } loggedInPath="browse">
					<SignupPage />
				</RedirectRoute>

				<Route exact path="/signup/registration">
					<SignupRegistrationPage />
				</Route>

				<Route exact path="/signup/regform">
					<RegformPage />
				</Route>

				<ProtectedRoute path="/browse" user={ user } >
					<BrowsePage />
				</ProtectedRoute>
			</Switch>
		</>
	)
}

export default App
