import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LogoutPage, SignupPage, BrowsePage, SignupRegistrationPage, RegformPage } from './pages'
import { useAuth } from './custom/'
// import { Route, ProtectedRoute } from './routes/'
import { FirebaseContext } from './custom/_firebaseContext'
import { GifContainer } from './containers'


// const HomePage = lazy( () => import('./pages/_HomePage'))
const LoginPage = lazy( () => import('./pages/_LoginPage'))

const HomePage = React.lazy(() => {
	return new Promise (resolve => setTimeout(resolve, 3 * 1000)).then(
		() => import( './pages/_HomePage' )
	)
})

const App = () => {

	const { user } = useAuth()
	const { loggedIn } = useContext(FirebaseContext)

	// console.log(loggedIn)
	//Finish up lazy loading with the fallback
	return (
		<>
			<Suspense fallback= { <GifContainer /> } >
				<Switch>

					<Route exact path="/">
						{/* { loggedIn ? <Redirect to="/browse" /> :  <HomePage /> } */}
						<HomePage />
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
