import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LogoutPage, SignupPage, BrowsePage, SignupRegistrationPage, RegformPage } from './pages'
import { FirebaseContext } from './contexts' // ✓
import { GifContainer } from './containers' // ✓
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
	// const { user } = useAuth()

	console.log(loggedIn)
	// Rename Gif to  PreLoad
	//
	return (
		<>
			<Suspense fallback= { <GifContainer /> } >
				<Switch>

					<Route exact path="/">
						{ loggedIn ? <Redirect to="/browse" /> :  <HomePage /> }
						{/* <HomePage /> */}
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
						{/* { loggedIn ? <BrowsePage /> : <Redirect to="/" /> } */}
						<BrowsePage />
					</Route>
				</Switch>
			</Suspense>
		</>
	)
}

export default App
