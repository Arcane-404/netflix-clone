import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage, BrowsePage, SignupRegistrationPage } from './pages'
// import { Icon } from './components'
// <Icon.InfoCircle />

const App = () => {

	const location = useLocation()
	console.log( location.pathname )

	return (
		<>
			<Switch>
				<Route exact path="/"> <HomePage/> </Route>
				<Route path="/login"> <LoginPage/> </Route>
				<Route exact path="/signup"> <SignupPage/> </Route>
				<Route path="/signup/:path">
					<SignupRegistrationPage/>
				</Route>
				<Route path="/browse"> <BrowsePage/> </Route>
			</Switch>
		</>
	)
}

export default App
