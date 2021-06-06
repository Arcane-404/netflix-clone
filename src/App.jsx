import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LogoutPage, SignupPage, BrowsePage, SignupRegistrationPage, RegformPage } from './pages'
import { FirebaseContext } from './contexts' // ✓
import { PreloadContainer } from './containers' // ✓
const { FirebaseContexts } = FirebaseContext
import { useAuth } from './hooks/'

// const HomePage = lazy( () => import('./pages/_HomePage'))
const LoginPage = lazy( () => import('./pages/_LoginPage')) // ✓

const HomePage = React.lazy(() => {
	return new Promise (resolve => setTimeout(resolve, 3 * 1000)).then(
		() => import( './pages/_HomePage' )
	)
}) // ✓

const App = () => {

	const { loggedIn } = useContext(FirebaseContexts) // ✓
	useAuth() //Everytime our App renders, it will run this useAuth hook

	console.log(loggedIn)

	return (
		<>
			<Suspense fallback= { <PreloadContainer /> } >
				<Switch>

					<Route exact path="/">
						{ loggedIn ? <Redirect to="/browse" /> :  <HomePage /> }
					</Route>

					<Route path="/login">
						{ loggedIn ? <Redirect to="/browse" /> :  <LoginPage /> }
					</Route>

					<Route path="/logout">
						<LogoutPage />
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
						{ loggedIn ? <BrowsePage /> : <Redirect to="/" /> }
					</Route>
				</Switch>
			</Suspense>
		</>
	)
}

export default App
