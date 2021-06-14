import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LogoutPage, SignupPage, RegistrationPage, RegFormPage, ErrorPage } from './pages'
import { FirebaseContext } from './contexts'
import { PreloadContainer } from './containers'
const { FirebaseContexts } = FirebaseContext
import { useAuth } from './hooks'

const HomePage = lazy(() => new Promise(resolve => setTimeout(() => resolve( import('./pages/_HomePage') ), 3000)))
const LoginPage = lazy(() => import('./pages/_LoginPage'))
const BrowsePage = lazy(() => import('./pages/_BrowsePage'))

const App = () => {

	const { loggedIn } = useContext(FirebaseContexts)
	useAuth() //Everytime our App renders, it will run this useAuth hook

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
						<RegistrationPage />
					</Route>

					<Route exact path="/signup/regform">
						<RegFormPage />
					</Route>

					<Route path="/browse">
						{/* { loggedIn ? <BrowsePage /> : <Redirect to="/" /> } */}
						<BrowsePage />
					</Route>

					<Route path="/*">
						<ErrorPage />
					</Route>
				</Switch>
			</Suspense>
		</>
	)
}

export default App
